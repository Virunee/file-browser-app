import treedata from '../treedata'
import { Map } from 'immutable';
import { SUBMIT_VALUE, UPDATE_VALUE }  from '../actions';

const initialState = {
    treedata,
    submittedValue: '',
    submit: false
  }

  export default function reducer (state = initialState, action) {
    switch(action.type){
      case UPDATE_VALUE:
        return state.set('value', action.values);
      case SUBMIT_VALUE:
        return state.set('submit', true)
      default:
        return state;
    }
  }