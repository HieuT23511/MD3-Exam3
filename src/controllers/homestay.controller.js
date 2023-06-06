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
                newHtml += `<td><a href='/detail?id=${homestay.idHomestay}'>${homestay.name}</a></td>`;
                newHtml += `<td>${homestay.city}</td>`;
                newHtml += `<td>${homestay.price.toLocaleString()} VND</td>`;
                newHtml += `<td>
                <button class="btn btn-outline-primary"><a href='/update?id=${homestay.idHomestay}'">Sửa</a></button>
                <button class="btn btn-outline-danger"><a href='/delete?id=${homestay.idHomestay}'">Xóa</a></button>
                </td>`
            });
            let html = await BaseController.readFileData('./src/views/listHomestay.html');
            html = html.replace('{list-homestay}', newHtml);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        }
    }
    static async getDetailPage(req, res) {
        let query = qs.parse(url.parse(req.url).query);
        if (query.id && req.method === 'GET') {
            let data = await homestayModel.getDetailHomestay(+query.id);
            let {id, name, bedrooms, wcrooms, price, describeHomestay, city} = data[0];
            let html = await BaseController.readFileData('./src/views/detailsHomestay.html');
            let newHtml = '';
            newHtml += `<button class='btn btn-primary'><a href='/update?id=${id}'class="text-decoration-none" style="color: white;">Sửa</a></button>
            <button class='btn btn-danger'><a href='/delete?id=${id}'class="text-decoration-none" style="color: white;">Xóa</a></button>`
            html = html.replace('{name1}', name);
            html = html.replace('{name2}', name);
            html = html.replace('{city}', city);
            html = html.replace('{bedrooms}', bedrooms);
            html = html.replace('{wcrooms}', wcrooms);
            html = html.replace('{price}', price);
            html = html.replace('{descript}', describeHomestay);
            html = html.replace('{btn-content}', newHtml);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        }
    }
    static async addHomestay(req, res) {
        if (req.method === 'GET') {
            let html = await BaseController.readFileData('./src/views/addHomestay.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        } else {
            let data = '';
            req.on('data', chunk => data += chunk);
            req.on('end', async () => {
                data = qs.parse(data);
                let {name, city, bedrooms, price, wcrooms, describeHomestay} = data;
                console.log(data)
                await homestayModel.addHomestay(name, city, bedrooms, price, wcrooms, describeHomestay).catch(err => {
                    res.writeHead(301, {location: '/add'});
                    res.end();
                });
                res.writeHead(301, {location: '/home'});
                res.end();
            })
        }
    }
    static async deleteHomestay(req, res) {
        let query = qs.parse(url.parse(req.url).query);
        if (req.method === "GET") {
            let html = await BaseController.readFileData('./src/views/deleteHomestay.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        } else {
            await homestayModel.deleteHomestay(+query.id).catch(err => console.log(err));
            res.writeHead(301, {location: '/home'});
            res.end();
        }
    }
}
module.exports = HomeStayController;