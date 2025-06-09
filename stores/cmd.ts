import { create } from "zustand";

type UIComponent = {
    id: string,
    label: string,
}

type CmdStore = {
    component: UIComponent[],
    addComponent: (component: UIComponent) => void
    removeComponent: (componentId: string) => void
}

export const useCreateCmd = create<CmdStore>((set) => ({
  component: [],
  addComponent: (components) =>
    set((state) => ({
      component: [...state.component, components],
    })),
  removeComponent: (componentsId) =>
    set((state) => ({
      component: state.component.filter((components) => components.id !== componentsId),
    })),
}));


type PackageCmd = {
  packageName: string;
  setCurrentPackage: (pkg: string) => void;
};

export const usePackageCmd = create<PackageCmd>((set) => ({
  packageName: 'pnpm',
  setCurrentPackage: (pkg: string) => set({ packageName: pkg }),
}));

