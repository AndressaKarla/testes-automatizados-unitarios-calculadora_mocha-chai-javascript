class Calculadora {
    somar(numero1, numero2) {
        return numero1 + numero2
    }

    subtrair(numero1, numero2) {
        return numero1 - numero2
    }

    multiplicar(numero1, numero2) {
        return numero1 * numero2
    }

    dividir(numero1, numero2) {
        if (numero2 == 0)
            return "Ao dividir, o 2° número não pode ser zero (0)"
        else
            return numero1 / numero2
    }
}

export default new Calculadora