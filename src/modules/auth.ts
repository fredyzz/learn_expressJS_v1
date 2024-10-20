import jwt from 'jsonwebtoken'


export const createJWT = (user) => {
 const token = jwt.sign({
    id: user.id,
    username: user.username
    },
    process.env.JWT_SECRET
)

 return token
}

export const protectMiddleware = (req, res, next) => {
    const bearer = req.headers.authorization

    if(!bearer) {
        res.status(401)
        res.json({message: 'not authorized'})
        return
    }

    const [_, token] = bearer.split(' ')

    if(!token) {
        res.status(401)
        res.json({message: 'not authorized'})
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (e) {
        console.log('auth error - ', e)
        res.status(401)
        res.json({message: 'not authorized'})
        return
    }
}