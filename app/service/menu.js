const Service = require("egg").Service
class MenuService extends Service {
    constructor(ctx) {
        super(ctx)
    }
    async create(body) {

        const { ctx } = this
        try {
            if (body.roleLevel) {
                body.roleLevel = JSON.stringify(body.roleLevel)
            }
            await ctx.model.Menu.create({
                ...body
            })
            return 'success'
        } catch (e) {
            console.log(e);
            return '服务端错误'
        }

    }
    async index() {
        const { ctx } = this
        try {
            const data = await ctx.model.Menu.findAll({
                raw: true,
            })
            const newData = ctx.helper.toTree(data)
            return {
                status: "success",
                // 将扁平结构转换为树形结构
                data: newData,

            }
        } catch (e) {
            return { status: "服务端错误" }
        }
    }
    async update(id, body) {
        const { ctx } = this;
        try {
            if (body.roleLevel) {
                body.roleLevel = JSON.stringify(body.roleLevel)
            }
            const data = await ctx.model.Menu.update({ ...body }, {
                where: { id: id }
            })
            if (data) {
                return 'success';
            } else {
                return "服务端错误"
            }
        } catch (e) {
            return Json.stringify(e);
        }
    }
    async destroy(id) {
        const { ctx } = this
        try {
            console.log(id);
            const data = await ctx.model.Menu.destroy({
                where: { id }
            })
            if (data === 0) {
                return '该数据不存在'
            } else {
                return 'success'
            }
        } catch (e) {
            return "服务端错误"
        }
    }
    async route(username) {
        const { ctx } = this
        try {
            const user = await ctx.model.User.findOne({
                include: [{
                    model: ctx.model.Userinfo
                }],
                where: { username: username }
            })
            const role = user.usersinfo.roleId
            // 进行菜单过滤
            let menus = await ctx.model.Menu.findAll({ raw: true })
            menus = menus.filter(menu => JSON.parse(menu.roleLevel).includes(role))
            const newMenu = ctx.helper.toTree(menus)
            return newMenu
        } catch (e) {
            return "服务端错误"
        }
    }
}
module.exports = MenuService