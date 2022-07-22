const CHOOS_CUSTOMER = 'CHOOS_CUSTOMER';

export const choosCustomer = (choos = 'all', action) => {
    switch(action.type){
        case CHOOS_CUSTOMER:
           return choos = action.payload

        default: return choos
    }
}

export const choosCustomerAction = (payload) => ({type: CHOOS_CUSTOMER, payload});