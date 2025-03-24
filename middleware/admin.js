const jwt=require("jsonwebtoken")
const {JWT_Admin_SECRET}=require("../config");
function adminMiddleware(req,res,next){
    const token=req.headers.token;
    const decoded=jwt.verify(token,JWT_Admin_SECRET)
    if(decoded){
        req.userId=decoded.id;
        next()
    }
    else{
        res.status(403).json({
            message:"You are not Signed in"
        })
    }
}
module.exports={
    adminMiddleware:adminMiddleware
}