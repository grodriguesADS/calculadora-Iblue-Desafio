const functionSum = require ('../models/function-sum');
const functionSubtraction = require ('../models/function-subtraction');
const functionMultiplication = require ('../models/function-multiplication');
const functionDivision = require ('../models/function-division');
    

exports.get = (req, res ) => {
    res.send('página em construção')
}

exports.soma = (req, res) => {
    var numeroUm = parseInt(req.body.numeroUm);
    var numeroDois = parseInt(req.body.numeroDois);
    const resultadoSomar = functionSum(numeroUm, numeroDois);
    console.log(resultadoSomar)
    res.send(resultadoSomar);
}

exports.subtracao = (req, res) => {
    var numeroUm = parseInt(req.body.numeroUm);
    var numeroDois = parseInt(req.body.numeroDois);
    const resultadoSubtracao = functionSubtraction(numeroUm, numeroDois);
    console.log(resultadoSubtracao)
    res.send(resultadoSubtracao);
}

exports.multiplicacao = (req, res) => {
    var numeroUm = parseInt(req.body.numeroUm);
    var numeroDois = parseInt(req.body.numeroDois);
    const resultadoMultiplicacao = functionMultiplication(numeroUm, numeroDois);
    console.log(resultadoMultiplicacao)
    res.send(resultadoMultiplicacao);
}

exports.divisao = (req, res) => {
    var numeroUm = req.body.numeroUm;
    var numeroDois = req.body.numeroDois;
    const resultadoDivisao = functionDivision(numeroUm, numeroDois);
    console.log(resultadoDivisao)
    res.send(resultadoDivisao);
}

