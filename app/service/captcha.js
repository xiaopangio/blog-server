const Service = require("egg").Service
const svgCaptcha = require('svg-captcha')
class CaptchaService extends Service {
    constructor(ctx) {
        super(ctx)
    }
    async index() {
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            ignoreChars: 'IiOo1',//禁用这些字符
            width: 100,
            height: 40,
            noise: 3,
            color: true,
            background: '#fff'
        })
        //将其存入session进行验证
        this.ctx.session.code = captcha.text.toLowerCase()
        // 验证码测试
        // console.log(this.ctx.session.code)
        // 设置时效
        this.ctx.session.maxAge = 1000 * 60 * 10
        return captcha
    }
}
module.exports = CaptchaService