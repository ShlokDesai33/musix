import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/typescript/state'

interface MusixStore {
  user: User | null;
  setUser: (user: User) => void;
}

const useMusixStore = create<MusixStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: 'musix-store',
    }
  )
);

export default useMusixStore;