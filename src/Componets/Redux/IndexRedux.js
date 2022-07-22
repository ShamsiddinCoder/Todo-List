import { createStore, combineReducers } from "redux";
import {addCustomers} from './AddCustomers';
import {choosCustomer} from './ChoosCustomer';

const rootReducer = combineReducers({
    add: addCustomers,
    choos: choosCustomer
});

export const store = createStore(rootReducer);