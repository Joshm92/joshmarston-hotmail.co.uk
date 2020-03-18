import { createStore } from "redux";
import initial from "./initial.js";
import reducer from "./reducer.js";


const store = createStore(
    reducer, 
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;