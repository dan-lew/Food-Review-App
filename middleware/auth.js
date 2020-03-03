const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    // Get Token from header
    const token = req.header('x-auth-token');

    // check if not token 
    if(!token){
        return res.status(400).json({ msg : " No token, authorization denied" })
    }
    try {
        const decode = jwt.verify(token ,process.env.JWT_SECRET);
        console.log(decode)
        req.user = decode.user;
        next();
    } catch (error) {
        return res.status(400).json({ msg : " Token is not valid" });        
    }

}