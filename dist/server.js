"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_route_1 = require("./src/routes/main-route");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log("request middleware");
    res.on("finish", () => {
        console.log("response finished ....");
    });
    next();
});
app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH POST DELETE PUT");
        return res.status(200).json({});
    }
    console.log('checking access control');
    next();
});
app.use((req, res, next) => {
    const error = new Error("not found");
    console.log('not found ', res.statusCode);
    if (res.statusCode != 200) {
        return res.status(404).json({ message: error.message });
    }
    next();
});
router.get('/test', (req, res) => {
    res.send('Express + TypeScript Server');
});
router.get('/status', (req, res) => {
    res.send('Express + TypeScript status 4');
});
app.use(router);
(0, main_route_1.registerMessageRoutes)(app, "/");
app.listen(PORT, function () {
    console.log("port ");
    console.log(`⚡️[server]: >>> Server is running at http://localhost:${PORT}`);
});


//   var server = http.createServer(app);
// //Lets start our server
// server.listen(4001, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", 4001);
// });
