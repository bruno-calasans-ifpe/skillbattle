import firestore from '@/services/firebase/firestore';
import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  where,
  limit,
} from 'firebase/firestore';
import { User } from 'next-auth';

const usersDocRef = collection(firestore, 'users');

export async function updateUserAfterSignIn(user: User) {
  const userDocRef = doc(firestore, 'users', user.id);
  await setDoc(
    userDocRef,
    { username: user.email?.split('@')[0].toLowerCase() },
    { merge: true },
  );
}

export async function getUserByEmail(email: string) {
  limit(1);
  const userByEmailQuery = query(usersDocRef, where('email', '==', email));

  const { docs, empty } = await getDocs(userByEmailQuery);
  
  if (empty) return null;

  const result = docs.map((d) => {
    if (d.exists()) return d.data();
  })[0];
  return result;
}
