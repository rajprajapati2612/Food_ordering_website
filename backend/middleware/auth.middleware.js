import jwt from "jsonwebtoken";

async function authUser(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            success:false,
            message: "token not provided"
        })
    }


    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({
            message:"Invalid token"
        })
    }
}

export default authUser;