const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
const CHECNGE_CUSTOMERS = 'CHENGE_CUSTOMERS';
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';

export const addCustomers = (state = JSON.parse(localStorage.getItem(`state`)) || [], action) => {
    switch(action.type){
        case ADD_CUSTOMERS:
            return [
                ...state,
                {
                    name: action.payload,
                    id: Date.now(),
                    complate: false
                }
            ]

        case CHECNGE_CUSTOMERS:
            return state.map(chengeState => {
                if(chengeState.id === action.payload){
                    return {...chengeState, complate: !chengeState.complate}
                }
                return chengeState
            })

        case REMOVE_CUSTOMERS:
            return state.filter(removeState => removeState.id !== action.payload)

        default: return state
    }
}

export const addCustomersAction = (payload) => ({type: ADD_CUSTOMERS, payload});
export const chengeCustomersAction = (payload) => ({type: CHECNGE_CUSTOMERS, payload});
export const removeCustomersAction = (payload) => ({type: REMOVE_CUSTOMERS, payload});