import {combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"

export default combineReducers({
	errors: errorsReducer,
	products: productReducer,
	cart: cartReducer
});