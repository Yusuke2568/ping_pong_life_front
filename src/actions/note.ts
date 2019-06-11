export const CHANGE = 'CHANGE';

export const change = (text: string) => ({
  type: CHANGE as typeof CHANGE,
  payload: { text },
});

export type NoteAction = ReturnType<typeof change>;
