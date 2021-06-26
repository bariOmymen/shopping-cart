import { createStore, applyMiddleware, compose, combineReducers  } from "redux";
import thunk from "redux-thunk"

import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";
import { productsReducer } from "./reducers/productsReducers";

const initialState={};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products : productsReducer,
        cart : cartReducers,
        orders : orderReducers,
    },
    ),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
