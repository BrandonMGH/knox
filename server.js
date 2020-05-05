const express = require('express');
const app = express();
const PORT = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.static('build' ));

app.post('/test', (req, res) => {
    let testJson = {
        id: req.body.id,
        name: req.body.name,
        superPower: req.body.superPower
    }
    console.log(testJson)
    res.json(testJson)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})