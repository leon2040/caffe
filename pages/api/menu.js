import fs from 'fs';
import path from 'path';
import NextCors from 'cors';

//export default function handler(req, res) {
export default async function handler(req, res) {  
    
    // Run the cors middleware
    // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
    await NextCors(req, res, {
    // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });


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
