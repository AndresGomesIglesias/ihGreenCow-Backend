import { indexCategories, deleteCategorie, addCategories, showCategorie } from '../components/_admin/api/CategorieAPI'
/**
 * ACTION TYPES
 */

 export const TOGGLE  = 'TOGGLE';



 /**
  * ACTION 
  */


 export const toggleRedux = () => { return { type: TOGGLE } }


 /**
  * ACTION ITEMS
  */

 export const INDEX_CATEGORIES  = 'INDEX_CATEGORIES';
 export const INDEX_ERROR       = 'INDEX_ERROR';
 export const INDEX_SUCCES      = 'INDEX_SUCCES';

  export const items =  () => {
    return (dispatch) => {
      return indexCategories()
      .then(rep => {
        dispatch({
          type: INDEX_CATEGORIES,
          payload: rep
        })
      })
      .catch(err => {
        dispatch(itemsErrors(err.message))
      })
    }
  }

  const itemsErrors = error => ({
    type: INDEX_ERROR,
    payload: error
  })


 /**
  * ACTION DELETE
  */ 

 export const DELETE_CATEGORIE    = 'DELETE_CATEGORIE';
 export const DELETE_ERROR        = 'DELETE_ERROR';
 export const DELETE_SUCCES       = 'DELETE_SUCCES';

  export const remove = (id) => {
    return (dispatch) => {
      return deleteCategorie(id)
      .then(rep => {
        dispatch({ 
          type: DELETE_CATEGORIE,
          payload: {
            id,
          } 
        })
      })
      .catch(err => {
        dispatch(deletesError(err.response))
      })
    }
  }

  const deleteErrors = error => ({
    type: DELETE_ERROR,
    error
  })


  /**
  * ACTION STORE
  */ 
 
 export const STORE_CATEGORIE   = 'STORE_CATEGORIE';
 export const STORE_ERROR       = 'STORE_ERROR';
 export const STORE_SUCCES      = 'STORE_SUCCES';

 export const store = (data) => {
  return (dispatch) => {
    return addCategories(data)
    .then(rep => {
      dispatch(storeSucces(rep))
    })
    .catch(err => {
      dispatch(storeErrors(err.response))
    })
  }
}

 const storeSucces = rep => ({
  type: STORE_CATEGORIE,
  rep
})

const storeErrors = error => ({
  type: STORE_ERROR,
  message: error
})


  /**
  * ACTION SHOW
  */ 

 export const SHOW_CATEGORIE   = 'SHOW_CATEGORIE';
 export const SHOW_ERROR       = 'SHOW_ERROR';
 export const SHOW_SUCCES      = 'SHOW_SUCCES';
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const show = (id) => {
  return (dispatch) => {
    return showCategorie(id)
    .then(rep => {
      dispatch({
      type: SHOW_CATEGORIE,
      rep
      })
    })
    .catch(err => {
      dispatch({
        type: SHOW_ERROR,
        message: err
      })
    })
  }
}


export const handleChange = event => ({
  type: HANDLE_CHANGE,
  event
})
 


