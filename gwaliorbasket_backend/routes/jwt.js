var { expressjwt: jwt } = require("express-jwt");

function jwts(){

    return jwt({
        secret:"shhhhh", algorithms:["HS256", "RS256"] }).unless({
            path:[
                "/company/chk_company_login"
            ]
        })
        
}
module.exports=jwts