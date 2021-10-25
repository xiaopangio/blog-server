const { Service } = require("egg")
class UserService extends Service {
    constructor(ctx) {
        super(ctx)
    }
    async index(query) {
        const { pageSize, pageNum } = query
        const offset = (pageNum - 1) * pageSize;
        console.log(offset)
        const data = await this.ctx.model.User.findAndCountAll({
            attributes: { exclude: ['password'] },
            limit: pageSize * 1,
            offset
        })
        console.log(data)
        return data
    }
    async show(id) {
        const { ctx } = this
        try {
            const data = await ctx.model.User.findOne({
                attributes: { exclude: ['password'] },
                where: {
                    id
                }
            })
            const body = {
                data
            }
            if (!data) {
                body.status = "暂无此用户"
            }
            else {
                body.status = "success"
            }
            return body
        } catch (e) {
            body.status = '服务端错误'
            return body
        }
    }
    async create(body) {
        const { username, password } = body
        const { ctx } = this
        const hasSameUsername = await ctx.model.User.findOne({
            where: {
                username
            }
        })
        if (!hasSameUsername) {
            //将密码直接存入数据库 不安全 这里我们采取对称加密
            const pwd = this.ctx.helper.encrypt(password)
            const { id } = await ctx.model.User.create({
                username,
                password: pwd,
            })
            // 自动注册info
            await ctx.model.Userinfo.create({
                userId: id,
                name: username
            })
            return 'success'
        }
        else {
            return '存在相同用户名'
        }

    }
    async update(id, body) {
        const { ctx } = this
        try {
            if (body.password) {
                body.password = ctx.helper.encrypt(body.password)
            }
            const hasOne = await ctx.model.User.update({ ...body }, {
                where: { id }
            })
            return "success"
        } catch (e) {
            return "服务端错误"
        }
    }
    async destroy(id) {
        const { ctx } = this
        try {
            const data = await ctx.model.User.destroy({
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
}
module.exports = UserService