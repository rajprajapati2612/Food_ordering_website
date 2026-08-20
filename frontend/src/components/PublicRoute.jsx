import { AuthContext } from "@/pages/auth.context"
import { useContext } from "react"
import { Navigate } from "react-router-dom";



const PublicRoute = ({children})=>{
    const {loading,user} = useContext(AuthContext);

    if(loading){
        return <div><h1>Loading...</h1></div>
    }

    if(user){
        return <Navigate to={'/home'} replace/>
    }

    return children;
}

export default PublicRoute;