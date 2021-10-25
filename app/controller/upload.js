const { Controller } = require("egg")
/**
 * @Controller UploadImg   
 */
const pump = require("mz-modules/pump")
const path = require("path")
const fs = require("fs")
class UploadController extends Controller {
    /***
     * @description 上传图片
     * @Router post /admin/upload/img
     * @Request formData file blogImg
     */
    async uploadImage() {
        const { ctx } = this;
        const stream = await ctx.getFileStream()
        const key = stream.filename //获取文件标识
        if (key !== 'blogImg') {
            ctx.helper.error("无效的标识")
        }
        try {
            const filename = Date.now() + encodeURIComponent(stream.filename)
            // 写入路径
            const target = path.join('app/public', filename)
            // 写入文件
            const writeStream = fs.createWriteStream(target)
            await pump(stream, writeStream)
            ctx.helper.success({
                filename,
                url: `/public/${filename}`
            })
        } catch (error) {
            console.log(error)
            ctx.helper.error("上传失败")

        }
    }
}
module.exports = UploadController