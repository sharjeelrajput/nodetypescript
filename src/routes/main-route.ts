
import Express from "express";
const MainRoutes = Express.Router();


export const registerMessageRoutes = (app: Express.Application, baseRoute: string) => {
    const authUser = (req: Express.Request, res: Express.Response, next : Express.NextFunction)  => {   
        console.log('checking local user ');
        res.locals.tt = JSON.stringify({username : "sharjeel"});
        console.log(res.locals.tt);
       // // if(!res.locals || !res.locals.user) {    
       // //     res.statusCode = 401;        
       // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
       // // }
       next();
   };

   const getLocals = (req: Express.Request, res: Express.Response, next : Express.NextFunction)  => {   
    console.log('Get local user ');    
    console.log(res.locals.tt);
   // // if(!res.locals || !res.locals.user) {    
   // //     res.statusCode = 401;        
   // //     res.status(401).json({ status: 'notok', errors: "you are not allowed to access" });  
   // // }
   next();
};

    app.get('/test2', (req: Express.Request, res: Express.Response) => {
        res.send('Express + TypeScript Server 222');
      });
    
      app.get('/status', (req: any, res: any) => {
        res.send('Express + TypeScript status 44');
      });
    
    
    app.get("/login", getLocals, (req: Express.Request, res: Express.Response) => {
        // res.locals.user = "sharjeel bin saleem";
        console.log(res.locals);        
        console.log(res.locals.tt);
        res.json({ type: "success", message : 'local user set  page here  ::::...'});
    });
    
    app.get("/admin", authUser, (req: Express.Request, res: Express.Response) => {
        console.log('checking local user ');
        res.locals.user2 = JSON.stringify({username : "sharjeel"});
        console.log(res.locals);
        res.send('Admin page here ...');
      });
    
}

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


  export default {MainRoutes};