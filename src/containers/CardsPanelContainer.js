import { connect } from 'react-redux';
import CardsPanel from './CardsPanel';

const mapStateToProps = state => ({
    searchValue: state.value
})


export default connect(
  mapStateToProps
)(CardsPanel)