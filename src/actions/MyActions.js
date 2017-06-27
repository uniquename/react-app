import * as actionTypes from './actionTypes';






//export function myClick(text) {
export function myClick (text)  {

  return function(dispatch, getState){

    console.log(text);
    dispatch(mySimpleAction(text));

    return {
      type: actionTypes.MY_CLICK,
      text
    };
  }
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

