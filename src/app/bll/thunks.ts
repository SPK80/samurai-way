import { Dispatch } from 'redux'
import { authMe } from 'features/authPage'
import { setAppInitializedAC } from './actions'

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authMe(dispatch).finally(() => dispatch(setAppInitializedAC(true)))
}
