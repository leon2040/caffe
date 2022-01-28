// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// 서버에서만 동작하는 fs, 로컬에서는 오류 발생함 
const fs = require('fs');
console.log(fs);

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
