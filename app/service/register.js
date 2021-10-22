const Service = require('egg').Service
class RegisterService extends Service {
    constructor(ctx) {
        super(ctx)
    }
    async index(body) {
        const { username, password, code } = body
        const { ctx } = this
        const hasCode = await ctx.model.Code.findOne({
            where: {
                status: 0,
                code,
            }
        })
        //如果为null 则验证码无效 或者被使用
        if (hasCode) {
            //注册逻辑
            // 判断是否有同名的用户名
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
                    code
                })
                // 自动注册info
                await ctx.model.Userinfo.create({
                    userId: id,
                    name: username
                })
                //注册完成后 将验证码失效
                await ctx.model.Code.update(
                    { status: 1 },
                    {
                        where: {
                            id: hasCode.id
                        }
                    })
                return 'success'
            }
            else {
                return '存在相同用户名'
            }

        } else {
            return "验证码无效"
        }

    }
}
module.exports = RegisterService