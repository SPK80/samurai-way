import axios, {AxiosResponse} from "axios";
import {UserType} from "../../../redux/reducers/usersPageReducer";

type UsersResponseType = {
    totalCount: number
    items: Array<UserType>
}
type AxiosResponseDataType = UsersResponseType & { error: string }

export const api = {
    async getUsers(currentPage: number, pageSize: number): Promise<UsersResponseType> {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        let response: AxiosResponse<AxiosResponseDataType>;
        try {
            response = await axios.get<AxiosResponseDataType>(url);
            if (response.data.error) throw new Error(response.data.error);
            return {
                totalCount: response.data.totalCount,
                items: response.data.items,
            }
        } catch (error) {
            console.error(error)
            return {totalCount: 0, items: []}
        }
    }
}