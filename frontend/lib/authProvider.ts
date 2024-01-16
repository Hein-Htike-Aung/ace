"use client";
import { create } from "zustand";
interface AuthStore {
  isLoggedIn: boolean;
  user: any;
  setLoggedIn: (status: boolean) => void;
  logout: () => void;
  setUser: (agent: any) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isLoggedIn: false,
  user: {},
  setLoggedIn: (status: boolean) =>
    set((state: any) => ({ isLoggedIn: status })),
  logout: () => {
    set((state: any) => ({
      ...state,
      user_id: "",
      isLoggedIn: false,
      user: {},
    }));
  },
  setUser: (user: any) => set((state: any) => ({ ...state, user })),
}));
