import { createStore, combineReducers} from 'redux'
import modalReducer from '../feature/modalSlice';
import authReducer from '../feature/authSlice';


const rootReducer = combineReducers({
    modal: modalReducer,
    auth: authReducer,
})

const store = createStore(rootReducer)

export default store;
