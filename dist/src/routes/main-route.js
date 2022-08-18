"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMessageRoutes = void 0;
const express_1 = __importDefault(require("express"));
const MainRoutes = express_1.default.Router();
const registerMessageRoutes = (app, baseRoute) => {
    const authUser = (req, res, next) => {
        console.log('checking local user ');
        res.locals.tt = JSON.stringify({ username: "sharjeel" });
        console.log(res.locals.tt);
        // // if(!res.locals || !res.locals.user) {    
        // //     res.statusCode = 401;        
        // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
        // // }
        next();
    };
    const getLocals = (req, res, next) => {
        console.log('Get local user ');
        console.log(res.locals.tt);
        // // if(!res.locals || !res.locals.user) {    
        // //     res.statusCode = 401;        
        // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
        // // }
        next();
    };
    app.get('/test2', (req, res) => {
        res.send('Express + TypeScript Server 222');
    });
    app.get('/status', (req, res) => {
        res.send('Express + TypeScript status 44');
    });
    app.get("/login", getLocals, (req, res) => {
        // res.locals.user = "sharjeel bin saleem";
        console.log(res.locals);
        console.log(res.locals.tt);
        res.json({ type: "success", message: 'local user set  page here  ::::...' });
    });
    app.get("/admin", authUser, (req, res) => {
        console.log('checking local user ');
        res.locals.user2 = JSON.stringify({ username: "sharjeel" });
        console.log(res.locals);
        res.send('Admin page here ...');
    });
};
exports.registerMessageRoutes = registerMessageRoutes;
//   const authUser = (req : any, res: any , next: any) => {   
//      console.log('checking local user ');
//     //  res.locals.tt = JSON.stringify({username : "sharjeel"});
//     //  console.log(res.locals.tt);
//     // // if(!res.locals || !res.locals.user) {    
//     // //     res.statusCode = 401;        
//     // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
//     // // }
//     next();
// };
// router.get("/login", (req : any, res : any) => {
//     res.locals.user = "sharjeel bin saleem";
//     res.json({ type: "success", message : 'local user set  page here ...'});
// });
//   router.get("/admin", authUser, (req: any, res: any, next: any) => {
//     res.send('Admin page here ...');
//   });
// MainRoutes.get('/test', (req: any, res: any) => {
//     res.send('Express + TypeScript Server');
//   });
//   MainRoutes.get('/status', (req: any, res: any) => {
//     res.send('Express + TypeScript status 4');
//   });
//   const authUser = (req : any, res: any , next: any) => {   
//      console.log('checking local user ');
//     //  res.locals.tt = JSON.stringify({username : "sharjeel"});
//     //  console.log(res.locals.tt);
//     // // if(!res.locals || !res.locals.user) {    
//     // //     res.statusCode = 401;        
//     // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
//     // // }
//     next();
// };
// MainRoutes.get("/login", (req : any, res : any) => {
//     res.locals.user = "sharjeel bin saleem";
//     res.json({ type: "success", message : 'local user set  page here ...'});
// });
//   MainRoutes.get("/admin", authUser, (req: any, res: any, next: any) => {
//     res.send('Admin page here ...');
//   });
exports.default = { MainRoutes };
