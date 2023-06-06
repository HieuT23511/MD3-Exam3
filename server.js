const http = require ('http');
const fs= require('fs')
const url = require('url')
const homestayController = require('./src/controllers/homestay.controller');
const GeneralController = require('./src/controllers/general.controller');
const port = 8888;
const server = http.createServer((req,res)=>{
    let pathUrl = url.parse(req.url).pathname;
    let chosenRouter = (typeof router[pathUrl] !== 'undefined') ? router[pathUrl] : GeneralController.handlerNotFound;
    chosenRouter(req, res).catch(err => console.log(err.message));
})
server.listen(port,"localhost",()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
router = {
    '/home': homestayController.getDisplayHomestayPage,
    '/detail': homestayController.getDetailPage,
    '/add': homestayController.addHomestay
}
