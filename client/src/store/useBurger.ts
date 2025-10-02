import { create } from "zustand";

interface BurgerMenuState {
    isBurgerOpen: boolean;
    isMobile: boolean;

    toggleBurger: () => void;
    closeBurger: () => void;
    setIsMobile: (value: boolean) => void;
}

export const useBurgerMenu = create<BurgerMenuState>((set) => ({
    isBurgerOpen: false,
    isMobile: window.innerWidth <= 620,
    toggleBurger: () =>
        set((state) =>
            state.isMobile ? { isBurgerOpen: !state.isBurgerOpen } : state
        ),
    closeBurger: () => set({ isBurgerOpen: false }),
    setIsMobile: (value) =>
        set(() => ({
            isMobile: value,
            isBurgerOpen: value ? false : false,
        })),
}));
