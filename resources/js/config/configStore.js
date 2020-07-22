



/**
 * configStore a pour but de créer le store à l'aide de la fonction createStore de redux. 
 * Nous lui envoyons comme paramètre la root du dossier reducers
 */



import { createStore, applyMiddleware, compose   } from 'redux';
import  rootReducer  from '../reducers';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(ReduxThunk)
    )
)

