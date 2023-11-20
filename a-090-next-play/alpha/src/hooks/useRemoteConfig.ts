'use client'

import { initializeApp } from "firebase/app";
import { fetchAndActivate, getRemoteConfig, getString } from "firebase/remote-config";
import { useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyB13_eR-_rg7S8Cph9JNJ6PywFwPGxS2ak",
    authDomain: "push-event-message.firebaseapp.com",
    projectId: "push-event-message",
    storageBucket: "push-event-message.appspot.com",
    messagingSenderId: "884996329581",
    appId: "1:884996329581:web:5d74127341446984daef64",
    measurementId: "G-K15CPFZEPZ"
};

export default function useRemoteConfig() {
    useEffect(() => {
        const app = initializeApp(firebaseConfig);

        const remoteConfig = getRemoteConfig(app)
        remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

        fetchAndActivate(remoteConfig)
            .then(() => {
                const value = getString(remoteConfig, "tosspayments_card_list");
                console.log(value)
                console.log(JSON.parse(value))
            })
            .catch((err) => {
                // ...
            });
    }, [])

}