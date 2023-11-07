import { create } from 'zustand'

interface ICounter {
    bears: number;
    cats: number;
    increaseBears: () => void;
    increaseCats: () => void;
}

const useCounter = create<ICounter>((set) => ({
  bears: 0,
  cats: 0,
  increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
  increaseCats: () => set((state) => ({ cats: state.cats + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export {
    useCounter
}