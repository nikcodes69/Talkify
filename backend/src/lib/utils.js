import jwt from 'jsonwebtoken';

export const generateToken = (userId,res)=>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '1h'
    
    })

    res.cookie("jwt",token,{
        maxAge: 60*60*1000, // 1 hour
        httpOnly: true, //prevent client side js from accessing the cookie(XSS attacks)
        sameSite: 'strict' // Prevent CSRF attacks
    });

    return token;
}