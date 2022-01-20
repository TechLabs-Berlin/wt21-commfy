import { Request, Response } from "firebase-functions";

import { FirestoreCollection, UserProfileRequestPayload } from "./types";
import { auth, cors, database } from "./utils";

export const createUserProfile = (req: Request, res: Response) => {
  return cors(req, res, async () => {
    // Check for POST request
    if (req.method !== "POST") {
      res.status(400).send({ message: "Please use a POST request instead." });
    }

    const payload = req.body as UserProfileRequestPayload;
    const { email, password, nickname, gender, personalWeatherTrend } = payload;

    try {
      console.log(`STARTED: Creating ${email} profile`);

      // 1. Create user record on Firebase Auth
      const user = await auth.createUser({ email, password });

      // 2. Create user record on Firestore
      const usersCollectionRef = database.collection(FirestoreCollection.users);
      await usersCollectionRef.doc(user.uid).set({
        email,
        nickname,
        gender,
        personalWeatherTrend,
      });

      console.log(`DONE: Creating ${email} profile`);
      res.status(200).send({ message: "User profile created." });
    } catch (err) {
      console.log(`ERROR: Creating ${email} profile`);
      console.log(err);
      res.status(400).send({ message: "Failed to create user profile." });
    }
  });
};
