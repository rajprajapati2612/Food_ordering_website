import { AuthContext } from "@/pages/auth.context"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";



const PublicRoute = ({children})=>{
    const {loading,user} = useContext(AuthContext);

    if(loading){
        return (<LoadingAnimation/>)
    }

    if(user){
        return <Navigate to={'/'} replace/>
    }

    return children;
}

export default PublicRoute;