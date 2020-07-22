import action from "../actions/admin_categorieAction"

const initialState = {
    modal: false,
    data: [],
    dataUpdate: [],
    hangleChangeCategorie: {},
    isUpdate: null,
    messages: null,
}

export const categorieReducer = (state = initialState, action ) => {
    var newState;
    var newData;
    
    switch(action.type) {
       
        case 'TOGGLE': 
            return { ...state, modal: !state.modal, messages: null }

        case 'INDEX_CATEGORIES':
            return { ...state, data: action.payload }

        case 'DELETE_CATEGORIE':
            newData = state.data.data.data.filter(rep => rep.id != action.payload.id)
            newState = { ...state, data: { ...state.data, data: { ...state.data,data: newData }}}
            return newState

        case 'DELETE_ERROR':
            return  { ...state, messages: action.error }
             
        case 'STORE_CATEGORIE':
            newData = state.data.data.data.push(action.rep.data.data)
            newState = { ...state, modal:  !state.modal,messages: null }
            return newState

        case 'STORE_ERROR':
            return {...state, messages: action.message, }

        case 'SHOW_CATEGORIE':
            return {...state, dataUpdate: action.rep.data.data }

        case 'HANDLE_CHANGE':
            const { name, value } = action.event.target
            return {...state, hangleChangeCategorie: { [name]: value } }

        default:
            return state
    }

}
export default categorieReducer





                                                                 