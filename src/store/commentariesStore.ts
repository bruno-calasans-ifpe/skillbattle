import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import type { Commentary } from '@/types/Commentary';

type CommentaryStoreState = {
  commentaries: Commentary[];
};

type CommentaryStoreActions = {
  createCommentary: (content: string) => void;
  deleteCommentary: (commentary: Commentary) => void;
  updateCommentary: (commentary: Commentary, newContent: string) => void;
};

type CommentaryStore = CommentaryStoreState & CommentaryStoreActions;

export const commentaryStoreInitialState: CommentaryStoreState = {
  commentaries: [],
};

const useCommentaryStore = create<CommentaryStore>()((set, get) => ({
  commentaries: [],
  createCommentary(content) {
    const newCommentary: Commentary = {
      id: uuidv4(),
      content: content,
      username: 'user12312',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    set((state) => ({ commentaries: [...state.commentaries, newCommentary] }));
  },
  deleteCommentary(commentary) {
    const updatedCommentaries = get().commentaries.filter(
      (c) => c.id !== commentary.id,
    );
    set(() => ({ commentaries: updatedCommentaries }));
  },
  updateCommentary(commentary, newContent) {
    const updatedCommentaries = get().commentaries.map((c) => {
      if (c.id === commentary.id) {
        c.content = newContent;
      }
      return commentary;
    });

    set(() => ({ commentaries: updatedCommentaries }));
  },
}));

export default useCommentaryStore;
