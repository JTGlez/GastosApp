import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserStore {
  name: string;
  income: string;
  period: string;
  limit: number;
  isUserDataComplete: () => boolean;
  setUserData: (name: string, income: string, period: string, limit: number) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: "",
      income: "",
      period: "monthly",
      limit: 0,
      isUserDataComplete: () => {
        const state: UserStore = useUserStore.getState();
        return state.name !== "" && state.income !== "" && state.limit > 0;
      },
      setUserData: (name: string, income: string, period: string, limit: number) => set({ name, income, period, limit }),
    }),
    {
      name: 'user-storage', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);
