import axios from "axios";
import {UserType} from "../../../redux/reducers/usersPageReducer";

export const api = {
    async getUsers(currentPage: number, pageSize: number) {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        let response;
        try {
            response = await axios.get(url);
            if (response.data.error) throw new Error(response.data.error);
            return {
                totalCount: response.data.totalCount,
                users: response.data.items.map((it: any): UserType =>
                    ({
                        id: it.id,
                        name: it.name,
                        avatarUrl: it.photos.small,
                        status: "",
                        following: false,
                        location: {country: "", city: ""},
                    })),
            }
        } catch (error) {
            console.error(error)
            return {}
        }
    }
}