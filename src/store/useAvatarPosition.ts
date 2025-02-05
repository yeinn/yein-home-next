import { create } from "zustand";

interface AvatarState {
	avatarPosition: { x: number; y: number; z: number };
	setAvatarPosition: (position: { x: number; y: number; z: number }) => void;
	mailBoxPosition: { x: number; y: number; z: number };
	setMailBoxPosition: (position: { x: number; y: number; z: number }) => void;
}

export const useAvatarPosition = create<AvatarState>((set) => ({
	avatarPosition: { x: 0, y: 0, z: 0 },
	setAvatarPosition: (position) => set({ avatarPosition: position }),
	mailBoxPosition: { x: 0, y: 0, z: 0 },
	setMailBoxPosition: (position) => set({ mailBoxPosition: position }),
}));