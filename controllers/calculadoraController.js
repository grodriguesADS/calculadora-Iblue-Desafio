const functionSum = require ('../models/function-sum');
const functionSubtraction = require ('../models/function-subtraction');
const functionMultiplication = require ('../models/function-multiplication');
const functionDivision = require ('../models/function-division');
const functionSquareRoot = require ('../models/function-square-root');
const functionPercentage = require ('../models/function-percentage');
var path = require('path');
    

exports.get = (req, res ) => {
    res.sendFile(path.resolve('views/index.html'));
}

exports.soma = (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoSomar = functionSum(numeroUm, numeroDois); 
    console.log(resultadoSomar)
    res.send(resultadoSomar);
}

exports.subtracao = (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoSubtracao = functionSubtraction(numeroUm, numeroDois);
    console.log(resultadoSubtracao)
    res.send(resultadoSubtracao);
}

exports.multiplicacao = (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoMultiplicacao = functionMultiplication(numeroUm, numeroDois);
    console.log(resultadoMultiplicacao)
    res.send(resultadoMultiplicacao);
}

exports.divisao = (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoDivisao = functionDivision(numeroUm, numeroDois);
    console.log(resultadoDivisao)
    res.send(resultadoDivisao);
}

exports.raizQuadrada = (req, res) => {
    var numeroUm = req.body.numeroUm;
    const resultadoRaizQuadrada = functionSquareRoot(numeroUm);
    console.log(resultadoRaizQuadrada)
    res.send(resultadoRaizQuadrada);
}

exports.porcentagem = (req, res) => {
    var numeroUm = req.body.numeroUm;
    const resultadoPorcentagem = functionPercentage(numeroUm);
    console.log(resultadoPorcentagem)
    res.send(resultadoPorcentagem);
}

