import { atom } from "recoil";

export const AppState = atom<number>({
    key: "AppState",
    default: 0
});