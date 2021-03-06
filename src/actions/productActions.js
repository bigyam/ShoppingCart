export function fetchProducts () {
	return dispatch => {
		dispatch(fetchProductsBegin());
		return fetch("http://localhost:8080/api/product/all")
			.then(handleErrors)
			.then(res => res.json())
			.then(res => {
				dispatch(fetchProductsSuccess(res));
				return res;
			})
			.catch(error => dispatch(fetchProductsFailure(error)));
	};
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});