import { connect } from 'react-redux';

import TextPreview from '../components/TextPreview';
import { NoteState } from '../reducer';

interface StateProps {
  previewText: string;
}

const mapStateToProps = (state: NoteState): StateProps => ({
  previewText: state.input,
});

export default connect(mapStateToProps)(TextPreview);
