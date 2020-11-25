import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "acbe659e-ab74-4691-a62b-b02b57afb23e"
    }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(userId) {
        return instance.post(`/follow/${userId}`, {})
    },
    deleteFollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(responce => responce.data)
    }
}
//
// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/${userId}`)
//     },
//     getStatus(userId) {
//         // debugger
//         console.log(5)
//         console.log(instance.get(`profile/status/${userId}`).then(response => response.data))
//         return instance.get(`profile/status/${userId}`)
//     },
//     updateStatus(status) {
//         return instance.put('profile/status', {status: status})
//     }
//
// }



