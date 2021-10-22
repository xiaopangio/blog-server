const Controller = require("egg").Controller
/**
 * @Controller UserInfo   
 */
class UserInfoController extends Controller {
    /***
     * @description 用户详情信息
     * @Router get /admin/userinfo/{id}
     * @Request path string *id
     */
    async show() {
        const { ctx } = this
        const { id } = ctx.params
        try {
            const body = await ctx.service.userinfo.show(id)
            if (body.status === 'success') {
                ctx.helper.success(body.data)
            } else {
                ctx.helper.error(body.status)
            }


        } catch (e) {
            ctx.helper.error(e)
        }
    }
}
module.exports = UserInfoController