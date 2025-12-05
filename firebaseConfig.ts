// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

// Your web app's Firebase configuration
// IMPORTANT: Replace the placeholder values below with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // Replace with your actual API key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your actual auth domain
  projectId: "YOUR_PROJECT_ID", // Replace with your actual project ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your actual storage bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your actual messaging sender ID
  appId: "YOUR_APP_ID" // Replace with your actual app ID
};

// Initialize Firebase
// This piece of code prevents re-initializing the app on every hot reload in development
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the initialized app
export { app };
