let DatabaseModel = require('./database.model');

class HomestayModel extends DatabaseModel {
    static async getAllHomestay() {
        let sql = 'select * from infoHomestay';
        return await DatabaseModel.querySql(sql);
    }
    static async addHomestay(name, city, bedrooms, price, wcrooms, describeHomestay) {
        let sql = `insert into User (name, city, bedrooms, price, wcrooms,describeHomestay) 
values ('${name}', '${city}', '${bedrooms}', '${price}', '${wcroom}' , '${describeHomestay}');`
        await DatabaseModel.querySql(sql);
    }
}

module.exports = HomestayModel;
