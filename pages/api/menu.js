import fs from 'fs';
import path from 'path';
//ㄴimport NextCors from 'nextjs-cors';

//export default function handler(req, res) {
export default async function handler(req, res) {  
    
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://githubㄴ.com/expressjs/cors
    // await NextCors(req, res, {
    // // Options
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: '*',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    // });

    
    // const corsOptions = await NextCors(req, res, {
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: 'http://localhost:3000/assets/menu.csv',
    //     credentials: true, 
    // });
  
  //app.use(cors(corsOptions));
  //const file = fs.readFileSync(path.resolve(cors(corsOptions)), 'utf-8');
// console.log(cors(corsOptions));
// console.log(corsOptions);
// const corsFunc = await NextCors(req, res, {
//     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//     //origin: 'http://localhost:3000//assets/menu.csv',
//     //Access-Control-Allow-Origin : '*',
//     origin: '*',
//     credentials: true,
//     optionsSuccessStatus: 200,  
// });



//   async function runMiddleware(req, res, fn) {
      
//       return new Promise((resolve, reject) => {
//         fn(req, res, (result) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }
  
//         return resolve(result)
//       })
//     })
//   }

//   //console.log(corsFunc);

//   async function corsHandler(req, res, corsFunc) {
//     runMiddleware( req, res, corsFunc);
    
//     //console.log(res);
//   }

//   //setTimeout(3);
//   console.log("aaa : " + corsFunc);

//   await corsHandler(req, res, corsFunc);
//   console.log(res);

    const file = fs.readFileSync(path.resolve('./assets/menu.csv'), 'utf-8');
    //console.log(file);

    const rows = file.split('\n');
    const json = [];
    rows.forEach(row => {
        if (row === '') return;
        const item = row.split(',')
        json.push({
            name: item[0],
            price: parseInt(item[1], 10),
        });
    });
    res.status(200).json(json);
    //console.log(json);
}
