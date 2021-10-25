const Service = require("egg").Service
class RegionService extends Service {
    constructor(ctx) {
        super(ctx)
    }
    async province() {
        const { ctx } = this
        const data = await ctx.model.Provinces.findAll()
        return data
    }
    async city(id) {
        const { ctx } = this
        const data = await ctx.model.Cities.findAll({
            where: {
                provinceCode: id
            }
        })
        return data
    }
    async area(id) {
        const { ctx } = this
        const data = await ctx.model.Areas.findAll({
            where: {
                cityCode: id
            }
        }
        )
        return data
    }

}
module.exports = RegionService