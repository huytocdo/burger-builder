import * as actionTypes from './actionTypes';
import axios from './../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS,
  orderId: id,
  orderData: orderData,
});

export const purchaseBurgerFail = (error) => ({
  type: actionTypes.PRUCHASE_BURGER_FAIL,
  error: error,
});

export const purchaseBurgerStart = (orderData) => {
  return dispatch => {
    axios.post( '/orders.json', orderData )
    .then( response => {
      console.log(response.data)
      dispatch(purchaseBurgerSuccess(response.data, orderData))
    } )
    .catch( error => {
      dispatch(purchaseBurgerFail(error))
    } );
  }
}






