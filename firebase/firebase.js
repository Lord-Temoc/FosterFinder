import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";

// const { initializeApp } = require("firebase/app");
// const { getDatabase } = require("firebase/database");
// const { getFirestore } = require("firebase/firestore");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

console.log("Firebase initialized");
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

import { collection, addDoc, getDocs } from "firebase/firestore";
// const { collection, addDoc, getDocs } = require("firebase/firestore");

const addPost = async (username, title, content, avatar) => {
  console.log(username);
  console.log(content);
  console.log(title);

  try {
    const docRef = await addDoc(collection(db, "posts"), {
      username: username,
      title: title,
      content: content,
      avatar: avatar,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const getAllPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  return posts;
};

const getPost = async (id) => {
  const posts = await getAllPosts();

  posts.forEach((post) => {
    if (post.id == id) {
      return post;
    }
  });
};

const getPostByUser = async (user) => {
  const posts = await getAllPosts();
  const userPosts = [];

  posts.forEach((post) => {
    if (post.data.username == user) {
      userPosts.push(post);
    }
  });

  return userPosts;
};

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];

  querySnapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  return users;
};

const setMessage = async (email, title, content, category) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      email: email,
      title: title,
      content: content,
      category: category,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

module.exports = {
  getAllPosts,
  getPost,
  getPostByUser,
  addPost,
  getUsers,
  setMessage,
};
