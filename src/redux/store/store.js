import { createStore, combineReducers} from 'redux'
import cartReducer from '../feature/modalSlice';
import authReducer from '../feature/authSlice';


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

const store = createStore(rootReducer)

export default store;
