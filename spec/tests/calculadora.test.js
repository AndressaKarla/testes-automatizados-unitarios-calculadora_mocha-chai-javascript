import * as chai from 'chai'
const expect = chai.expect

import calculadora from '../../app/calculadora.js'
import carregarFixture from '../support/helpers.js'

describe('Calculadora', () => {
    let calculadoraFixture

    before(() => {
        calculadoraFixture = carregarFixture('calculadora')
    })

    context('Somar', () => {
        it('Validar soma de números inteiros positivos de unidade e de centena', () => {
            const resultadoObtido = calculadora.somar(calculadoraFixture.numeroInteiroPositivo.unidade, calculadoraFixture.numeroInteiroPositivo.centena2)
            const resultadoEsperado = 1000

            expect(resultadoObtido).to.equal(resultadoEsperado)
        })
    })
})