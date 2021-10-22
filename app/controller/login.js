const Controller = require('egg').Controller
/**
 * @Controller login   
 */
const rule = {
    username: 'string',
    password: 'string',
    captcha: 'string'
}
class LoginController extends Controller {
    /***
     * @description 登陆
     * @Router post /admin/login
     * @Request body loginRequest
     */
    async index() {
        const { ctx } = this
        try {
            ctx.validate(rule, ctx.request.body)
            const body = await ctx.service.login.index(ctx.request.body)
            if (body.status === 'success') {
                // 成功状态生成token
                const { username, password } = ctx.request.body
                body.data.token = ctx.helper.setToken({ username, password })
                ctx.helper.success(body.data)//生成token 并返回
            } else {
                ctx.helper.error(body)
            }
        } catch (e) {
            ctx.helper.error(e)
        }

    }
}
module.exports = LoginController