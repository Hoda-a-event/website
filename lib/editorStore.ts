import { create } from "zustand";

export type EditorElement = {
  id: string;
  type: "image" | "text" | "shape";
  src?: string; // for images
  text?: string; // for text
  fill?: string; // for shapes/text
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  community?: "bonk" | "ssx" | "unstable" | "useless";
  locked?: boolean;
  hidden?: boolean;
  z: number; // stacking
};

type EditorState = {
  elements: EditorElement[];
  selectedId: string | null;
  history: EditorElement[][];
  historyIndex: number;
  canvasBackground: string;
  cropCircle: boolean;

  // Actions
  addElement: (element: Omit<EditorElement, "id" | "z">) => void;
  updateElement: (id: string, updates: Partial<EditorElement>) => void;
  removeElement: (id: string) => void;
  selectElement: (id: string | null) => void;
  undo: () => void;
  redo: () => void;
  reset: () => void;
  setCanvasBackground: (bg: string) => void;
  setCropCircle: (crop: boolean) => void;
  duplicateElement: (id: string) => void;
  bringToFront: (id: string) => void;
  sendToBack: (id: string) => void;
};

const initialState = {
  elements: [],
  selectedId: null,
  history: [[]],
  historyIndex: 0,
  canvasBackground: "#FDFFF7",
  cropCircle: false,
};

export const useEditorStore = create<EditorState>((set, get) => ({
  ...initialState,

  addElement: (element) => {
    const id = `element-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    const maxZ = Math.max(...get().elements.map((el) => el.z), -1);
    const newElement: EditorElement = {
      ...element,
      id,
      z: maxZ + 1,
    };

    set((state) => {
      const newElements = [...state.elements, newElement];
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push([...newElements]);

      return {
        elements: newElements,
        selectedId: id,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      };
    });
  },

  updateElement: (id, updates) => {
    set((state) => {
      const newElements = state.elements.map((el) =>
        el.id === id ? { ...el, ...updates } : el
      );

      return {
        elements: newElements,
      };
    });
  },

  removeElement: (id) => {
    set((state) => {
      const newElements = state.elements.filter((el) => el.id !== id);
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push([...newElements]);

      return {
        elements: newElements,
        selectedId: state.selectedId === id ? null : state.selectedId,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      };
    });
  },

  selectElement: (id) => {
    set({ selectedId: id });
  },

  undo: () => {
    set((state) => {
      if (state.historyIndex > 0) {
        const newIndex = state.historyIndex - 1;
        return {
          elements: [...state.history[newIndex]],
          historyIndex: newIndex,
          selectedId: null,
        };
      }
      return state;
    });
  },

  redo: () => {
    set((state) => {
      if (state.historyIndex < state.history.length - 1) {
        const newIndex = state.historyIndex + 1;
        return {
          elements: [...state.history[newIndex]],
          historyIndex: newIndex,
          selectedId: null,
        };
      }
      return state;
    });
  },

  reset: () => {
    set({
      ...initialState,
      history: [[]],
    });
  },

  setCanvasBackground: (bg) => {
    set({ canvasBackground: bg });
  },

  setCropCircle: (crop) => {
    set({ cropCircle: crop });
  },

  duplicateElement: (id) => {
    const state = get();
    const element = state.elements.find((el) => el.id === id);
    if (element) {
      state.addElement({
        ...element,
        x: element.x + 20,
        y: element.y + 20,
      });
    }
  },

  bringToFront: (id) => {
    set((state) => {
      const maxZ = Math.max(...state.elements.map((el) => el.z));
      const newElements = state.elements.map((el) =>
        el.id === id ? { ...el, z: maxZ + 1 } : el
      );

      return { elements: newElements };
    });
  },

  sendToBack: (id) => {
    set((state) => {
      const minZ = Math.min(...state.elements.map((el) => el.z));
      const newElements = state.elements.map((el) =>
        el.id === id ? { ...el, z: minZ - 1 } : el
      );

      return { elements: newElements };
    });
  },
}));
