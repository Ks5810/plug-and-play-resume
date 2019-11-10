/**
 * configureStore.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from "redux-thunk";
import experienceReducer from '../reducers/experiences';
import educationReducer from '../reducers/educations'
import authReducer from '../reducers/auth'
import basicInfoReducer from "../reducers/basicInfo";
import generatedReducer from "../reducers/generated";
import listingReducer from "../reducers/listings";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(
    combineReducers({
            auth: authReducer,
            basicInfo: basicInfoReducer,
            educations: educationReducer,
            experiences: experienceReducer,
            generated: generatedReducer,
            listingInfo: listingReducer,
        }
    ),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;