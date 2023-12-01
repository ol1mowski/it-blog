import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase/firebaseConfig';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();


async function fetchDataFromCollection(collectionName) {
  const collectionRef = collection(db, collectionName);
  
  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    throw error;
  }
}

export function fetchPosts() {

  const collectionName = 'events';  
  return fetchDataFromCollection(collectionName);
}
