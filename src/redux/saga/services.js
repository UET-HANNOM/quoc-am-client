import { postService } from "container/common/callApi"


export const loginService = async (email, password) => {
    try {
        const res = await postService("/api/auth", {email, password});debugger
        return res
    } catch (error) {
        throw error;
    }
}  