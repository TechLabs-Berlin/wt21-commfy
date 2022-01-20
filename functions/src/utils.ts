import * as corsMiddleware from "cors";
import { initializeApp, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

export const app: App = initializeApp();

// Firestore instance
export const database = getFirestore(app);

// Auth instance
export const auth = getAuth(app);

// CORS instance
export const cors = corsMiddleware({
  origin: true,
});
