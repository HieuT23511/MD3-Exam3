const qs = require('qs');
const url = require('url');

const BaseController = require('./baseFunction.controller');
const homestayModel = require('./../models/homestay.model');

class HomeStayController {
    static async getDisplayHomestayPage(req, res) {
        if (req.method === 'GET') {
            let data = await homestayModel.getAllHomestay();
            console.log(data)
            let newHtml = '';
            data.forEach((homestay,index) => {
                newHtml += `<tr>`;
                newHtml += `<td>${index + 1}</td>`;
                newHtml += `<td><a href='/detail?id=${homestay.id}'>${homestay.name}</a></td>`;
                newHtml += `<td>${homestay.city}</td>`;
                newHtml += `<td>${homestay.price.toLocaleString()} VND</td>`;
                newHtml += `<td>
                <button class="btn btn-outline-primary"><a href='/update?id=${homestay.id}'">Sửa</a></button>
                <button class="btn btn-outline-danger"><a href='/delete?id=${homestay.id}'">Xóa</a></button>
                </td>`
            });
            let html = await BaseController.readFileData('./src/views/listHomestay.html');
            html = html.replace('{list-homestay}', newHtml);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        }
    }

}

module.exports = HomeStayController;