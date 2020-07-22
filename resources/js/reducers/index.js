/**
 * le point d'entrer de notre reducer. Ici nous allons pouvoir ajouter des reducers à notre store. 
 * Nous envoyons en paramètre à la fonction combineReducers les différent reducers à notre store 
 */

import { combineReducers } from 'redux'  
import { categorieReducer } from './admin_categorieReducer'

export default combineReducers({ 
    categorieReducer
    
// ajouter votre reducer ici. Ne pas oublier la virgule :) 
 })