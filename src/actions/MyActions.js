import * as actionTypes from './actionTypes';

//export function myClick(text) {
export const myClick = (text) => dispatch => {
  console.log(text);

  dispatch(mySimpleAction());

  return {
    type: actionTypes.MY_CLICK,
    text
  };
}


//export function myClick(text) {
export const mySimpleAction = (text) => {
  console.log('MY_SIMPLE');



  return {
    type: actionTypes.MY_SIMPLE,
    text
  };
}

export function myInitLoader(argument) {

  return {
    type: actionTypes.MY_INIT_LOADER,
    argument
  }
}
/*
export const myDispatcher = (someVar) => dispatch => {
    dispatch({ type: 'MY_CLICK' });

    $.get(API_URL, { top: top, skip: skip })
        .done((data, testStatus, jqXHR) => {
            dispatch({ type: 'LIST.SUCCESS', data: data });
        });
};*/
