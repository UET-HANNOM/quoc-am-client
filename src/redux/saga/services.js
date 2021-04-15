import axios from "axios";
import { postService } from "container/common/callApi"


export const loginService = async (email, password) => {debugger
    try {
        // return await postService("/api/auth", {email, password});
        return await axios.post("localhost:5000/api/auth",JSON.stringify({email, password}))
    } catch (error) {
        throw error;
    }
}  