'use strict';
const rule = {
    username: 'string',
    password: 'string',
    code: 'string'
}
const Controller = require('egg').Controller;
/**
 * @Controller Register
 */
class RegisterController extends Controller {
    /***
     * @description 注册
     * @Router post /admin/register
     * @@Request body registerRequester
     */
    async index() {
        const { ctx } = this;

        try {
            //参数校验
            // 检测请求的内容是否符合我们的标准
            ctx.validate(rule, ctx.request.body)
            // service来处理数据 链接数据库
            const status = await ctx.service.register.index(ctx.request.body)
            if (status === 'success') {
                ctx.helper.success("成功")
            } else {
                ctx.helper.error(status)
            }


        } catch (e) {
            ctx.helper.error(e)
        }

    }
}

module.exports = RegisterController;
