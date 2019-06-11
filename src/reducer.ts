import { Reducer } from 'redux';
import { NoteAction, CHANGE } from './actions/note';

export interface NoteState {
  input: string;
}

export const initialState: NoteState = { input: '' };

const NoteReducer: Reducer<NoteState, NoteAction> = (
  state: NoteState = initialState,
  action: NoteAction,
): NoteState => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        input: action.payload.text,
      };
    default:
      return {
        ...state,
      };
  }
};

export default NoteReducer;
