import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { change } from '../actions/note';
import Note from '../components/Note';
import { NoteState } from '../reducer';

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
  change: text => dispatch(change(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Note);
