import { useContext } from "react"
import { AuthContext } from "../Components/Pages/Shared/Context/AuthProvider/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;