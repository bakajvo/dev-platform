import axios from 'axios'
import {SignUpRequest} from "../models/request/SignUpRequest";

const useUserService = () => {

    const signUp = (requestBody: SignUpRequest): Promise<void> => {
        return axios.post('/auth/register', requestBody)
    };

    return {
        signUp
    }
};

export default useUserService;