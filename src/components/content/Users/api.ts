import axios, {AxiosResponse} from "axios";
import {UserType} from "../../../redux/reducers/usersPageReducer";

type GetUsersResponseType = {
    totalCount: number
    users: Array<UserType>
}
type AxiosResponseDataType = {
    error: string
    totalCount: number
    items: Array<UserType>
}

export const api = {
    async getUsers(currentPage: number, pageSize: number): Promise<GetUsersResponseType> {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        let response;
        try {
            response = await axios.get<string, AxiosResponse<AxiosResponseDataType>>(url);
            if (response.data.error) throw new Error(response.data.error);
            return {
                totalCount: response.data.totalCount,
                users: response.data.items,
            }
        } catch (error) {
            console.error(error)
            return {totalCount: 0, users: []}
        }
    }
}