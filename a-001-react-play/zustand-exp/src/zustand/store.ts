import { StateCreator, create } from 'zustand'
import { persist, devtools, createJSONStorage, PersistOptions } from 'zustand/middleware'



interface Form {
    name: string,
    addr?: string,
}

interface Test {
    form: Form
    bears: number;
    text: string;
    changeForm: (obj: Partial<Form>) => void;
    changeText: (text: string) => void;
    increasePopulation: () => void;
    removeAllBears: () => void;
}


// const useZutand = create<Test>((set) => ({
//     form: {
//         name: "",
//     },
//     bears: 0,
//     text: "",
//     // changeForm: (obj) => set((state) => ({ ...state, form: { ...state.form, ...obj } })),
//     changeForm: (obj) => set((state) => ({ form: { ...state.form, ...obj } })),
//     changeText: (text) => set(() => ({ text })),
//     increasePopulation: () => set((state) => ({ ...state, bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0, text: "" }),
// }));
const useZutand = create<Test>()(devtools((set) => ({
    form: {
        name: "",
    },
    bears: 0,
    text: "",
    // changeForm: (obj) => set((state) => ({ ...state, form: { ...state.form, ...obj } })),
    changeForm: (obj) => set((state) => ({ form: { ...state.form, ...obj } })),
    changeText: (text) => set(() => ({ text })),
    increasePopulation: () => set((state) => ({ ...state, bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0, text: "" }),
})));


export default useZutand;



interface Bear {
    bears: number;
    addABear: () => void;
}

export type BearPersist = (config: StateCreator<Bear>, options: PersistOptions<Bear>) => StateCreator<Bear>;

export const useBearStore = create<Bear>()(
    devtools(
        persist((set) => ({
            bears: 0,
            addABear: () => set((state) => ({ bears: state.bears + 1 })),
        }), {
            name: 'food-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        })
    )
)


// export const useBearStore2 = create<Bear>(
// (persist as BearPersist)(
export const useBearStore2 = create<Bear>()(
    persist(
        (set, get) => ({
            bears: 0,
            addABear: () => set({ bears: get().bears + 1 }),
        }),
        {
            name: 'food-storage2', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
