const Controller = require("egg").Controller
const updateRule = {
    name: {
        type: "string",
        required: false,
    },
    mobile: {
        type: "string",
        required: false,
    },
    avatar: {
        type: "string",
        required: false,
    },
    provinceId: {
        type: "number",
        required: false,
    },
    cityId: {
        type: "number",
        required: false,
    },
    areaId: {
        type: "number",
        required: false,
    },
}
/**
 * @Controller UserInfo   
 */
class UserInfoController extends Controller {
    /***
     * @description 更新用户信息
     * @Router put /admin/userinfo/{id}
     * @Request path string *id
     * @Request body updateUserInfo
     */
    async update() {
        const { ctx } = this
        const { id } = ctx.params
        try {
            ctx.validate(updateRule, ctx.request.body)
            const status = await ctx.service.userinfo.update(id, ctx.request.body)
            if (status === 'success') {
                ctx.helper.success("更新成功")
            }
            else {
                ctx.helper.error(status)
            }
        } catch (e) {
            ctx.helper.error(e)

        }

    }
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