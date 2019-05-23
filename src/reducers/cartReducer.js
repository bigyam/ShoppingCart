import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/cartActions';

export default function cartReducer (state = [], action) {
	switch(action.type) {
		case ADD_TO_CART:
			return addToCart(state, {
				id: action.id,
				name: action.name,
				price: action.price
			})

		case REMOVE_FROM_CART:
			return removeFromCart(state, {
				id: action.id,
				name: action.name,
				price: action.price
			})

		default:
			return state;
	}
}

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
	const cartItem = itemInCart(cart, item);
	console.log(cartItem);
	if(cartItem === undefined){
		return [...cartWithoutItem(cart, item), {...item, quantity: 1}].sort(function(a, b){return a.id - b.id;})
	} else {
		return [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}].sort(function(a, b){return a.id - b.id;})
	}
}

const removeFromCart = (cart, item) => {
	const cartItem = itemInCart(cart, item);
	console.log(cartItem.quantity);
	if(cartItem.quantity === 1){
		return cartWithoutItem(cart, item).sort(function(a, b){return a.id - b.id;})
	} else {
		return [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity -1}].sort(function(a, b){return a.id - b.id;})
	}
}