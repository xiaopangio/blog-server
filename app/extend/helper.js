const CryptoJS = require("crypto-js")
//封装公用方法
module.exports = {
    success(data) {
        const body = {
            success: true,
        }
        if (data) {
            body.data = data
        }
        this.ctx.body = body
    },
    error(error, status) {
        this.ctx.status = status || 403
        this.ctx.body = {
            success: false,
            data: JSON.stringify(error)
        }
    },
    //加密
    encrypt(word, keystr, ivstr) {
        let key = this.config.KEY
        let iv = this.config.IV
        if (keystr) {
            key = CryptoJS.enc.Utf8.parse(keystr)
            iv = CryptoJS.enc.Utf8.parse(ivstr)
        }
        let srcs = CryptoJS.enc.Utf8.parse(word)
        var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding,
        })
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
    },
    // 解密
    decrypt(word, keystr, ivstr) {
        let key = this.config.KEY
        let iv = this.config.IV
        if (keystr) {
            key = CryptoJS.enc.Utf8.parse(keystr)
            iv = CryptoJS.enc.Utf8.parse(ivstr)
        }
        let base64 = CryptoJS.enc.Base64.parse(word)
        let src = CryptoJS.enc.Base64.stringify(base64)
        let decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding,
        })
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
        return decryptedStr.toString()
    },
    //设置token
    setToken(opt) {
        return this.app.jwt.sign(opt, this.app.config.jwt.secret, {
            expiresIn: '7d'//设置时效，后面会根据实际情况改变
        })
    }
}
