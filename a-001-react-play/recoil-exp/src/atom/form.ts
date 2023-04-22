import { atom, selector, selectorFamily } from "recoil";



export const nameAtom = atom<string>({
    key: 'form-name',
    default: "",
});

export const addrAtom = atom<string>({
    key: 'form-addr',
    default: "",
});

export const ageAtom = atom<number>({
    key: 'form-age',
    default: 0,
});

export const formAtom = selector({
    key: 'form-selector',
    get: ({ get }) => {
        const name = get(nameAtom);
        const addr = get(addrAtom);
        const age = get(ageAtom);

        return {
            name,
            addr,
            age
        }
    },
});

type formType = {
    name: string,
    addr: string,
    age: number,
}

export const FormAtom = atom<formType>({
    key: 'form-atom',
    default: {
        name: "",
        addr: "",
        age: 0,
    },
})

export const nameSelector = selector<string>({
    key: "form-name-selector",
    get: ({ get }) => get(FormAtom).name,
    set: ({ get, set }, name) => set(FormAtom, { ...get(FormAtom), name } as formType),
});
export const addrSelector = selector<string>({
    key: "form-addr-selector",
    get: ({ get }) => get(FormAtom).addr,
    set: ({ get, set }, addr) => set(FormAtom, { ...get(FormAtom), addr } as formType),
});
export const ageSelector = selector<number>({
    key: "form-age-selector",
    get: ({ get }) => get(FormAtom).age,
    set: ({ get, set }, age) => set(FormAtom, { ...get(FormAtom), age } as formType),
});


export const FormSelectorFamily = selectorFamily<formType[keyof formType],keyof formType>({
    key: "Form-selector-family",
    get:
      (params) =>
      ({ get }) =>
        get(FormAtom)[params],
    set:
      (params) =>
      ({ get, set }, newValue) =>
        set(FormAtom, { ...get(FormAtom), [params]: newValue }),
  });