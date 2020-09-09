export const initialState = { autenticado: false, user: {} }

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return { ...state, autenticado: action.payload }
    case 'SET_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export const setAuth = isAuth => {
  return { type: 'SET_AUTH', payload: isAuth }
}

export const setUser = user => {
  return { type: 'SET_USER', payload: user }
}

export default authReducer