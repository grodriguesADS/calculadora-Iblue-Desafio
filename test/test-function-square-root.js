const { assert } = require("chai");
const functionSquareRoot = require("../models/function-square-root");

describe('Teste da função raiz quadrada:', function () {
    describe('1° teste: Somente um parametro', function () {
        it('Recebendo somente um parametro', async function () {
            const retornaResultadoUmParametro = await functionSquareRoot(25);
            assert.equal(retornaResultadoUmParametro, 5)
        })
    })
    describe('1° teste: Somente um parametro que retorna um numero decimal', function () {
        it('Recebendo somente um parametro que retorna decimal', async function () {
            const retornaResultadoUmParametro = await functionSquareRoot(2);
            assert.equal(retornaResultadoUmParametro, 1.41421356)
        })
    })
})