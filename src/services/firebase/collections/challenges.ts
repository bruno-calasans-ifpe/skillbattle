import {
  addDoc,
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from 'firebase/firestore';

import type { Challenge } from '@/types/Challenge';

import firestore from '../firestore';

const challengesCollection = collection(firestore, 'challenges');

export async function createChallenge(challenge: Omit<Challenge, 'id'>) {
  await addDoc(challengesCollection, challenge);
}
