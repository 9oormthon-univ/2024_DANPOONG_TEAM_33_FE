import { create } from "zustand";

interface FileInfo {
  file: File;
  fileName: string;
  type: "portfolio" | "volunteer";
}

interface OnboardingState {
  files: { [key: string]: FileInfo };
  addFile: (key: string, fileInfo: FileInfo) => void;
  removeFile: (key: string) => void;
  clearFiles: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  files: {},
  addFile: (key, fileInfo) =>
    set((state) => ({
      files: { ...state.files, [key]: fileInfo },
    })),
  removeFile: (key) =>
    set((state) => {
      const newFiles = { ...state.files };
      delete newFiles[key];
      return { files: newFiles };
    }),
  clearFiles: () => set({ files: {} }),
}));
