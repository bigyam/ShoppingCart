export function addToCart (product)  {
	return {
		type: ADD_TO_CART,
		id: product.id,
		name: product.name,
		price: product.price
	}
}

export function removeFromCart (product)  {
	return {
		type: REMOVE_FROM_CART,
		id: product.id,
		name: product.name,
		price: product.price
	}
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';