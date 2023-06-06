let DatabaseModel = require('./database.model');
class HomeStayModel extends DatabaseModel {
    async getAllHomestay() {
        let sql = `SELECT * FROM Homestay`;
        return await DatabaseModel.querySql(sql);
    }

    async getDetailHomestay(id) {
        let sql = `SELECT * FROM Homestay`
        return await DatabaseModel.querySql(sql);
    }

    static async addHomestay(name, city, bedrooms, price, wcrooms, describeHomestay) {
        let sql = `insert into User (name, city, bedrooms, price, wcrooms,describeHomestay)
values ('${name}', '${city}', '${bedrooms}', '${price}', '${wcrooms}' , '${describeHomestay}');`
        return await DatabaseModel.querySql(sql);
    }
}
module.exports = new HomeStayModel;

