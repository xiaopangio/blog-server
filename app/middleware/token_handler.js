module.exports = opt => {
    return async function (ctx, next) {
        // 获取token
        const token = ctx.request.header.authorization//请求头中的token
        if (token) {
            try {
                let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.serect)
                ctx.decode = decode
                await next()
            } catch (e) {
                ctx.helper.error(e, 403)
            }
        }
        else {
            ctx.helper.error('权限校验失败', 403)
        }
    }
}