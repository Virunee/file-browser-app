export const SUBMIT = 'SUBMIT';
export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const UPDATE_VALUE = 'UPDATE_VALUE';

export const submitData = (data) => dispatch => {
    dispatch({
        type: SUBMIT_VALUE,
        value: data
    })
}

export const updateValue = (value) => {
    return dispatch => {
        dispatch({
            type: UPDATE_VALUE,
            values: value
        });
    };
};