import firebase from "../../configs/firebase";

import { Collections } from "../types";

const createCollection = (data: Collections) => {
  const formatData = {
    ...data,
    createdAt: firebase.firestore.Timestamp.now(),
  };

  firebase.firestore().collection("collections").add(formatData);
};

export { createCollection };
