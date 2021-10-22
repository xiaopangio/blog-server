const Controller = require('egg').Controller
/**
 * @Controller Captcha
 */
class Captcha extends Controller {
    /***
     * @description 验证码
     * @Router get /admin/captcha
     */
    async index() {
        const { ctx } = this
        const captcha = await ctx.service.captcha.index()
        ctx.response.type = 'image/svg+xml'
        ctx.helper.success({
            data: captcha.data
        })
    }
}
module.exports = Captcha