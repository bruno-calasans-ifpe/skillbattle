import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { User } from 'next-auth';

import firestore from '@/services/firebase/firestore';

const usersDocumentRef = collection(firestore, 'users');

export async function updateUserAfterSignIn(user: User) {
  const userDocumentRef = doc(firestore, 'users', user.id);
  await setDoc(
    userDocumentRef,
    { username: user.email?.split('@')[0].toLowerCase() },
    { merge: true },
  );
}

export async function getUserByEmail(email: string) {
  limit(1);
  const userByEmailQuery = query(usersDocumentRef, where('email', '==', email));

  const { docs, empty } = await getDocs(userByEmailQuery);

  if (empty) return null;

  const result = docs.map((d) => {
    if (d.exists()) return d.data();
  })[0];
  return result;
}
