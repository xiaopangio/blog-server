const Controller = require('egg').Controller
const indexRule = {
    pageSize: "string",
    pageNum: "string",
    // 模糊搜索
    key: { type: 'enum', values: ['username', 'code', 'status'], required: false },
    keyword: {
        type: "string",
        required: false
    }

}
const createRule = {
    username: "string",
    password: "string",
}
const updateRule = {
    password: {
        type: "string",
        required: false
    },
    status: {
        type: "int",
        required: false
    }
}
/**
 * @Controller user   
 */
// 用户的增删改查
class UserController extends Controller {

    async index() {
        const { ctx } = this
        try {
            ctx.validate(indexRule, ctx.request.query)
            const data = await ctx.service.user.index(ctx.request.query)
            ctx.helper.success(data)
        } catch (e) {
            ctx.helper.error(e)
        }

    }
    async show() {
        const { ctx } = this
        const { id } = ctx.params
        try {
            const body = await ctx.service.user.show(id)
            if (body.status === 'success') {
                ctx.helper.success(body.data)
            } else {
                ctx.helper.error(body.status)
            }


        } catch (e) {
            ctx.helper.error(e)
        }
    }
    async create() {
        const { ctx } = this;
        try {
            console.log(ctx.request.body);
            ctx.validate(createRule, ctx.request.body)
            const status = await ctx.service.user.create(ctx.request.body)
            if (status === 'success') {
                ctx.helper.success()
            } else {
                ctx.helper.error(status)
            }
        } catch (e) {
            ctx.helper.error(e)
        }
    }
    async update() {
        const { ctx } = this;
        const { id } = ctx.params
        // console.log(id)
        try {
            ctx.validate(updateRule, ctx.request.body)
            const status = await ctx.service.user.update(id, ctx.request.body)
            if (status === 'success') {
                ctx.helper.success()
            } else {
                ctx.helper.error(status)
            }
        } catch (e) {
            ctx.helper.error(e)
        }
    }
    async destroy() {
        const { ctx } = this
        const { id } = ctx.params
        try {
            const status = await this.ctx.service.user.destroy(id)
            if (status === 'success') {
                this.ctx.helper.success()
            } else {
                this.ctx.helper.error(status)
            }
        } catch (e) {
            this.ctx.helper.error(e)
        }
    }
}
module.exports = UserController