// reducer user
const initialState = {
  email: 'risano@gamil.com',
  fullname: 'risano akbar',
  photoProfile: 'http://google.com',
  profile: {},
  error: null
}
const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        profile: action.payload
      }
    case 'LOGIN_USER_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'REGISTER_USER':
      return {
        ...state,
        count: state.count - 1,
        email: action.coba,
        products: action.payload
      }
    default:
      return state
  }
}

export default userReducer