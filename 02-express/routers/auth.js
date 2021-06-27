const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
 const {name} = req.body
 if(name){
  return res.status(200).send(`welcome`)
 }else{res.status(401).send('please provide crydentials')}
 //console.log(req.body)}
 //res.send('POST')
})

module.exports = router