import * as string from '../string'

const initialState = {
  email: 'risano@gamil.com',
  count: 0,
  products: [],
  loading : false
}
const productReducer = (state = initialState, action) => {
  // if(action.type === 'INCREMENT'){
  //   return {
  //     // email: 'risanoblbla@gamil.com',
  //     ...state,
  //     count : state.count + 1
  //   }
  // }else if(action.type === 'DECREMENT'){
  //     return {
  //       ...state,
  //       count : state.count - 1,
  //       email: action.coba,
  //       products: action.payload
  //     }
  // }
  // else{
  //   return state
  // }
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: action.payload
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        email: action.coba,
        products: action.payload
      }
    case string.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case 'REQ_GET_PRODUCT':
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default productReducer