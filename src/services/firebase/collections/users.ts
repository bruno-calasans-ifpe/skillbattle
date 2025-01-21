import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
  getDoc,
} from 'firebase/firestore';
import { User as AuthUser } from 'next-auth';

import firestore from '@/services/firebase/firestore';
import { User } from '@/types/User';

const usersDocumentRef = collection(firestore, 'users');

export async function updateUserAfterSignIn(user: AuthUser) {
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
    if (d.exists()) {
      const { email, name, image, username } = d.data();
      return { id: d.id, email, name, image, username } as User;
    }
  })[0];

  return result;
}
