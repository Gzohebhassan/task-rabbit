const jwt = require('jsonwebtoken');

//middleware function to handle authentication using Json Web Token

exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(403).json({message: "access denied"});
    }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            next();
        }
        catch(error){
            res.status(401).json({message: "invalid token"});
        }
};