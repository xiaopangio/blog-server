const Controller = require('egg').Controller
const CreateRule = {
    path: {
        type: 'string',
    },
    menuName: {
        type: 'string',
    },
    icon: {
        type: 'string',
        required: false,

    },
    pid: {
        type: 'int',
        required: false,
    },
    component: {
        type: 'string',
        required: false,
    },
    redirect: {
        type: 'string',
        required: false,
    },
    roleLevel: {
        type: 'array',
        required: false,
    },
}
const updateRule = {
    path: {
        type: 'string',
    },
    menuName: {
        type: 'string',
    },
    icon: {
        type: 'string',
        required: false,

    },
    pid: {
        type: 'int',
        required: false,
    },
    component: {
        type: 'string',
        required: false,
    },
    redirect: {
        type: 'string',
        required: false,
    },
    roleLevel: {
        type: 'array',
        required: false,
    },
}
class MenuController extends Controller {
    async create() {
        const { ctx } = this;
        try {
            console.log(ctx.request.body);
            ctx.validate(CreateRule, ctx.request.body)
            const status = await ctx.service.menu.create(ctx.request.body)
            if (status === 'success') {
                ctx.helper.success()
            } else {
                ctx.helper.error(status)
            }
        } catch (e) {
            ctx.helper.error(e)
        }

    }
    async index() {
        const { ctx } = this
        try {
            const body = await ctx.service.menu.index()
            if (body.status === 'success') {
                ctx.helper.success(body.data)
            }
            else {
                ctx.helper.error(body.data)
            }
        } catch (e) {
            ctx.helper.error(e)

        }
    }
    async update() {
        const { ctx } = this;
        try {
            const { id } = ctx.params
            const body = ctx.request.body;
            ctx.validate(CreateRule, ctx.request.body)
            const status = await ctx.service.menu.update(id, body);
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
            const status = await this.ctx.service.menu.destroy(id)
            if (status === 'success') {
                this.ctx.helper.success()
            } else {
                this.ctx.helper.error(status)
            }
        } catch (e) {
            this.ctx.helper.error(e)
        }
    }
    async route() {
        const { ctx } = this
        try {
            const { username } = ctx.decode//token解析用户名
            const data = await ctx.service.menu.route(username)
            ctx.helper.success(data)
        } catch (e) {
            ctx.helper.error(e)
        }
    }
}
module.exports = MenuController