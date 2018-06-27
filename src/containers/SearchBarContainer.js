import { connect } from 'react-redux'
import SearchComponent from '../components/SearchComponent'

import { submitData, updateValue } from '../actions';

export const mapStateToProps = (state) => ({
  submittedValue: state
});

const mapDispatchToProps = dispatch => ({
  submitData: (value) => {
    dispatch(submitData(value));
  },
  updateValue: (value) => {
    dispatch(updateValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);