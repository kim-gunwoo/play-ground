"use client";

import { initializeApp } from "firebase/app";
import {
  fetchAndActivate,
  getRemoteConfig,
  getString,
} from "firebase/remote-config";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export default function useRemoteConfig() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);

    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

    fetchAndActivate(remoteConfig)
      .then(() => {
        const value = getString(remoteConfig, "tosspayments_card_list");
        console.log(value);
        console.log(JSON.parse(value));
      })
      .catch((err) => {
        // ...
      });
  }, []);
}
