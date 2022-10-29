import { Dispatch } from 'redux'
import {
    AppActionsType,
    RequestStatus,
    setAppErrorAC,
    setAppStatusAC,
} from 'app'

export const commonThunk = async (
    dispatch: Dispatch<AppActionsType>,
    func: () => Promise<any>
) => {
    dispatch(setAppStatusAC(RequestStatus.loading))
    try {
        await func()
    } catch (err: any) {
        dispatch(setAppErrorAC(err))
    } finally {
        dispatch(setAppStatusAC(RequestStatus.idle))
    }
}
