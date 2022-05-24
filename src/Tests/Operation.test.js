import { operaciones } from "./Operation"

describe('Dados dos numeros y una operacion'), () => {
    it('regresa el resultado de la operacion', () => {
        expect(operaciones('+', 5, 10)).toBe(15)
    })
}