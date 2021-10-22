'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // // ctx.helper.error("错误", 402)
    // ctx.helper.success(ctx.helper.encrypt(123))
    // //WiR/Fya2Wm2KBxcgB2oxqQ== 加密后的字符串
    // ctx.helper.success(ctx.helper.decrypt("WiR/Fya2Wm2KBxcgB2oxqQ=="))
    //加密测试
    // const a = ctx.helper.setToken({ a: 1 })
    // ctx.helper.success(a)
    // 解密测试
    // const b = this.app.jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhpYW9iYWkzIiwicGFzc3dvcmQiOiI3ODk0NTYxMjMiLCJpYXQiOjE2MzM2MTE3ODUsImV4cCI6MTYzNDIxNjU4NX0.R1VZ4ci4lx8rNb3ke8aK47x6cg_P8XTtZnnqPtUalfE', this.app.config.jwt.secret)
    // ctx.helper.success(b)
    ctx.helper.success()
  }
}

module.exports = HomeController;
