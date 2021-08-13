import { combineReducers } from "redux";
import { productsReducer,selectedProductsReducer} from "./productsReducer";


export const reducers = combineReducers({
  allProducts: productsReducer,
  product:selectedProductsReducer
 
});

