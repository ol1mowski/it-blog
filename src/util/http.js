
import { collection, getDocs} from 'firebase/firestore';

import { db, storage } from '../config/firebase/firebaseConfig';
import { QueryClient } from '@tanstack/react-query';

import { ref, getDownloadURL } from 'firebase/storage';


export const queryClient = new QueryClient();

export const getImageUrl = async () => {
  try {
    // Specify the path to your image in the storage
    const imageRef = ref(storage, 'images/it.png');

    // Get the image download URL
    const url = await getDownloadURL(imageRef);

    // Set the image URL in the state
    return url;
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error; // Re-throw the error to be caught by the calling code
  }
};

async function fetchDatatoSlider(collectionName) {
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

  const collectionName = 'posts';  
  return fetchDatatoSlider(collectionName);
}
