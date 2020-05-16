const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.post('/auth', (req, res) => {
    let user = {
        id: req.body.id,
        name: req.body.name,
        superPower: req.body.superPower
    }
    console.log(user);
    res.json(user);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`);
})