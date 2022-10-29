import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatusType,
    setAppErrorAC,
    setAppStatusAC,
} from 'app/bll/appReducer'

export const commonThunk = async (
    dispatch: Dispatch<AppActionsType>,
    func: () => Promise<any>
) => {
    dispatch(setAppStatusAC(RequestStatusType.loading))
    try {
        await func()
    } catch (err: any) {
        dispatch(setAppErrorAC(err))
    } finally {
        dispatch(setAppStatusAC(RequestStatusType.idle))
    }
}
