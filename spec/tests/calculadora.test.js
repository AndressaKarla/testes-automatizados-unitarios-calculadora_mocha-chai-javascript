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

    context('Subtrair', () => {
        it('Validar subtração de número inteiro positivo de centena e número inteiro negativo de unidade', () => {
            const resultadoObtido = calculadora.subtrair(calculadoraFixture.numeroInteiroPositivo.centena1, calculadoraFixture.numeroInteiroNegativo.unidade)
            const resultadoEsperado = 999

            expect(resultadoObtido).to.equal(resultadoEsperado)
        })
    })

    context('Multiplicar', () => {
        it('Validar multiplicação de números inteiros positivos neutro [zero (0)] e de dezena', () => {
            const resultadoObtido = calculadora.multiplicar(calculadoraFixture.numeroInteiroPositivo.neutro, calculadoraFixture.numeroInteiroPositivo.dezena2)
            const resultadoEsperado = 0

            expect(resultadoObtido).to.equal(resultadoEsperado)
        })
    })

    context('Dividir', () => {
        it('Validar não divisão de números inteiros positivos de dezena e neutro [zero (0)]', () => {
            const resultadoObtido = calculadora.dividir(calculadoraFixture.numeroInteiroPositivo.dezena1, calculadoraFixture.numeroInteiroPositivo.neutro)
            const resultadoEsperado = "Ao dividir, o 2° número não pode ser zero (0)"

            expect(resultadoObtido).to.equal(resultadoEsperado)
        })

        it('Validar divisão de número inteiro negativo de dezena e número inteiro positivo de unidade', () => {
            const resultadoObtido = calculadora.dividir(calculadoraFixture.numeroInteiroNegativo.dezena, calculadoraFixture.numeroInteiroPositivo.unidade)
            const resultadoEsperado = -99

            expect(resultadoObtido).to.equal(resultadoEsperado)
        })
    })
})