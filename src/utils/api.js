import db from '../Firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export const getBlogById = async (postId) => {
  try {
    const blogRef = await getBlogRefById(postId);
    const blogSnapshot = await blogRef.once('value');
    const blogData = blogSnapshot.val();
    return blogData;
  } catch (error) {
    console.error(error);
  }
};

const getBlogRefById = async (postId) => {
  const blogRef = await db.ref(`blogs/${postId}`);
  return blogRef;
};

export const getBlogData = () => {
    return new Promise((resolve, reject) => {
      const blogsRef = collection(db, 'blogs');
      const data = [];
      getDocs(blogsRef).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
};  