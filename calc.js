const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

function check(x, y) {
    let number1 = Number(x);
    let number2 = Number(y);
    if (isNaN(number1) || isNaN(number2))
        return { error : "invalid value" };
    return {
        a : number1,
        b : number2
    }
}

app.get("/add", (req, res) => {
    let result = check(req.query.a, req.query.b)
    if(result.error) return res.status(404).json(result)
    res.json({
        answer : result.a + result.b
    })
})

app.get("/add", (req, res) => {
    let result = check(req.query.a, req.query.b)
    if(result.error) return res.status(404).json(result)
    res.json({
        answer : result.a + result.b
    })
})

app.get("/subt", (req, res) => {
    let result = check(req.query.a, req.query.b)
    if(result.error) return res.status(404).json(result)
    res.json({
        answer : result.a - result.b
    })
})

app.get("/mult", (req, res) => {
    let result = check(req.query.a, req.query.b)
    if(result.error) return res.status(404).json(result)
    res.json({
        answer : result.a * result.b
    })
})

app.get("/div", (req, res) => {
    let result = check(req.query.a, req.query.b)
    if(result.error) return res.status(404).json(result)
    res.json({
        answer : result.a / result.b
    })
})

app.listen(3000, () => {
    console.log("server started successfully on port 3000")
})

