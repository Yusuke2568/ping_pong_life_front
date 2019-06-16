import React, { FC } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { change } from '../actions/note';
import Note from '../components/Note';
import { NoteState } from '../reducer';

const noteSelector = (state: NoteState) => state.input;

const _Note = () => {
  const dispatch = useDispatch();
  const input = useSelector(noteSelector);

  return (
    <Note input={input} change={(text: string) => dispatch(change(text))} />
  );
};

interface StateProps {
  input: string;
}

interface DispatchProps {
  change: (text: string) => void;
}

const mapStateToProps = (state: NoteState): StateProps => ({
  input: state.input,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  // ここのchange(text)はactions/noteから持ってきている
  change: text => dispatch(change(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Note);
