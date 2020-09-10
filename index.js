var soap = require('strong-soap').soap;
const express = require('express')
const app = express()
app.use(express.json())

app.post('/convert', (req, res) => {
    
    soap.createClient(req.body.url, (err, client) => {
        
        var method = client[req.body.operation];
        method({anyAttribute:req.body.anyAttribute}, function (err, result, envelope) {
            
            res.send({ result, envelope  })
        });
    })
})
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server is up and running on post ${port}`) 
})
