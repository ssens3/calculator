const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

function calc(x, y, o) {
    let number1 = Number(x);
    let number2 = Number(y);
    if (isNaN(number1) || isNaN(number2))
        return { error : "invalid value" };

    if(o === "+") return number1 + number2;
    else if(o === "-") return number1 - number2;
    else if(o === "*") return number1 * number2;
    else if(o === "/") {
        if (number2 === 0) return "undefined"
        return number1 / number2;
    }
    else return { error : "invalid operator" }
}

app.get('/calc', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    let op = req.query.op;

    let result = calc(a, b, op);
    if (result.error) {
        return res.status(400).json({
            "error": result.error
        })
    }
    res.json({
        "answer": result
    })
})

app.listen(3000, () => {
    console.log("server started successfully on port 3000")
})

