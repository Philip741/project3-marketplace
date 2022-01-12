const jwt = require('jsonwebtoken');

const secret = 'whatdoyouevenactuallyputhere'
const expiration = '6h' //settin it for 6 hours, we can change if we want   

module.exports = {
    authMiddleware: function ({ req }){
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req; 
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration }) 
            req.user = data;
        } catch {
            console.log("JWT Invalid!");
        }

        return req
    }, 
    signToken: function ({email, username, _id}) {
        const payload = {email, username, _id};
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration});    
    },
};