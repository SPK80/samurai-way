export enum RequestStatus {
    idle,
    loading,
}

export type ErrorType = string | null

export type RequestingStateType = {
    request: {
        status: RequestStatus
        error: ErrorType
    }
}

export const initialRequestingState = () => ({
    status: RequestStatus.idle,
    error: null,
})
