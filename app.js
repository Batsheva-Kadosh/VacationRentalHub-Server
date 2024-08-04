const express = require("express");
const advertiserRouters = require("./routers/advertiserRouters")
const http = require("http");
const apartmentsRouters = require("./routers/apartmentRouters");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        return res.status(200).json({});
    }
    next();
});


// app.use(bodyParser.json())
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log(req);
    const urlParts = req.url.split("/");
    urlParts.splice(0, 1);
    const routerName = urlParts[0]; 
    urlParts.splice(0, 1);
    
    const restUrl = urlParts.join("/");
    switch (routerName) {
        case "advertiser":
            console.log("it work?");
            advertiserRouters(req, res, restUrl);
            break;
        case "apartment":
            apartmentsRouters(req, res, restUrl);
            break;
        default:
            res.writeHead("Error 404 :" + routerName + " is not found");
            res.end();
    }
}
);
server.listen(PORT, (err) => {
    if (err) {
        console.log('error while runing server', err);
    }
    else
        console.log('server is runing in port', PORT);
});
