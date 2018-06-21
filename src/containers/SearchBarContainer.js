import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'

const mapStateToProps = state => ({
  searchValue: state.value
})
export default connect(
  mapStateToProps
)(SearchBar)