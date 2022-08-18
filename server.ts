import express from "express";
import  http from "http";
import dotenv from 'dotenv';
import {registerMessageRoutes} from "./src/routes/main-route";
import bodyParser from 'body-parser';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));

app.use( (req, res, next) => {
    console.log("request middleware");
    res.on("finish", ()=>{
        console.log("response finished ....");
    });
    next();
});


app.use((req, res, next) => {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if( req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH POST DELETE PUT");
        return res.status(200).json({});
    }
    console.log('checking access control');
    next();
});


app.use((req, res, next) => {
    const error = new Error("not found");
    console.log('not found ', res.statusCode);
    if( res.statusCode != 200){
        return res.status(404).json({ message : error.message });   
    }
    
    next(); 
}); 


router.get('/test', (req: any, res: any) => {
    res.send('Express + TypeScript Server');
  });

  router.get('/status', (req: any, res: any) => {
    res.send('Express + TypeScript status 4');
  });


  app.use(router);
  registerMessageRoutes(app, "/"); 
  app.listen(PORT, function() {
    console.log("port ");
        console.log(`⚡️[server]: >>> Server is running at http://localhost:${PORT}`);
  });


//   var server = http.createServer(app);

// //Lets start our server
// server.listen(4001, function(){
//     //Callback triggered when server is successfully listening. Hurray!
//     console.log("Server listening on: http://localhost:%s", 4001);
// });
