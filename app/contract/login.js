module.exports={
    loginRequest:{
        username:{
            type:"string",
            require:true,
            description:"用户名",
            example:"xiaobai3"
        },
        password:{
            type:"string",
            require:true,
            description:"密码",
            example:"789456123",
        },
        captcha:{
            type:"string",
            require:true,
            description:"验证码",
            example:"abcd",
        }
    }
}