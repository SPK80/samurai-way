import axios from "axios";
import {UserType} from "../../../bll/reducers/usersPageReducer";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
})

type UsersResponseType = {
    items: Array<UserType> //| UserType
    totalCount?: number
    error?: string
}
export const usersApi = {
    async getUsers(currentPage: number, pageSize: number): Promise<UsersResponseType> {

        try {
            const response = await instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
            if (response.data.error) throw new Error(response.data.error);
            return response.data
        } catch (error) {
            console.error(error)
            return {totalCount: 0, items: [], error: error as string}
        }
    },
}


// export type  ProfileType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
//     photos: {
//         small?: string
//         large?: string
//     }
// }

// export type ProfileResponseType = ProfileType | { message: string }

// async getProfile(userId: number): Promise<ProfileResponseType> {
//     const url = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
//     try {
//         const response = await axios.get<ProfileResponseType>(url);
//         debugger
//         // @ts-ignore
//         if (response.data.message) throw new Error(response.data.message);
// return response.data
// } catch (message) {
//     console.error(message)
//     return {message: message} as ProfileResponseType
// }
// }