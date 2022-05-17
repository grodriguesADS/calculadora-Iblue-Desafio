const { assert } = require("chai");
const functionPercentage = require("../models/function-percentage");

describe('Teste da função porcentagem:', function () {
    describe('1° teste: Somente um parametro', function () {
        it('Recebendo somente um parametro', async function () {
            const retornaResultadoUmParametro = await functionPercentage(2);
            assert.equal(retornaResultadoUmParametro, 0.02)
        })
    })
    describe('2° teste: Somente um parametro negativo', function () {
        it('Recebendo somente um parametro negativo', async function () {
            const retornaResultadoUmParametro = await functionPercentage(-1);
            assert.equal(retornaResultadoUmParametro, -0.01)
        })
    })
    describe('3° teste: Somente String como parametro', function () {
        it('Recebendo String como parametro', async function () {
            const retornaResultadoUmParametro = await functionPercentage('2');
            assert.equal(retornaResultadoUmParametro, '0.02')
        })
    })
    describe('4° teste: Dois parametros', function () {
        it('Recebendo dois parametro', async function () {
            const retornaResultadoUmParametro = await functionPercentage(4, 2);
            assert.equal(retornaResultadoUmParametro, 0.04)
        })
    })
})