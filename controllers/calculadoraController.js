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

exports.soma = async (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoSomar = functionSum(numeroUm, numeroDois); 
    const dadoResultado = await resultadoSomar;
    console.log(dadoResultado)
    res.send(JSON.stringify(dadoResultado));
}

exports.subtracao = async (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoSubtracao = functionSubtraction(numeroUm, numeroDois);
    const dadoResultado = await resultadoSubtracao;
    console.log(dadoResultado)
    res.send(JSON.stringify(dadoResultado));
}

exports.multiplicacao = async (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoMultiplicacao = functionMultiplication(numeroUm, numeroDois);
    const dadoResultado = await resultadoMultiplicacao;
    console.log(dadoResultado)
    res.send(JSON.stringify(dadoResultado));
}

exports.divisao = async (req, res) => {
    var numeroUm = parseFloat(req.body.numeroUm);
    var numeroDois = parseFloat(req.body.numeroDois);
    const resultadoDivisao = functionDivision(numeroUm, numeroDois);
    const dadoResultado = await resultadoDivisao;
    console.log(dadoResultado)
    res.send(JSON.stringify(parseFloat(dadoResultado.toFixed(4))));
}

exports.raizQuadrada = async (req, res) => {
    var numeroUm = req.body.numeroUm;
    const resultadoRaizQuadrada = functionSquareRoot(numeroUm);
    const dadoResultado = await resultadoRaizQuadrada;
    console.log(dadoResultado)
    res.send(JSON.stringify(parseFloat(dadoResultado)));
}

exports.porcentagem = async (req, res) => {
    var numeroUm = req.body.numeroUm;
    const resultadoPorcentagem = functionPercentage(numeroUm);
    const dadoResultado = await resultadoPorcentagem;
    console.log(dadoResultado)
    res.send(JSON.stringify(dadoResultado));
}

