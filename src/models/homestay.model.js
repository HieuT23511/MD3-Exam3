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

    async addHomestay(name, city, bedrooms, price, wcrooms, describeHomestay) {
        let sql = `insert into Homestay (name, city, bedrooms, price, wcrooms, describeHomestay)
values ('${name}', '${city}', ${bedrooms}, ${price}, ${wcrooms} , '${describeHomestay}');`
       await DatabaseModel.querySql(sql);
    }
    async deleteHomestay (idHomestay){
        let sql = `delete from Homestay where idHomestay = ${idHomestay}`
        await DatabaseModel.querySql(sql);
    }
}
module.exports = new HomeStayModel;

