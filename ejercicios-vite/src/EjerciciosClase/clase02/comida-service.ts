import type { Comida } from './comida';

export class ComidaService {
    mostrarInfo(comida: Comida): void {
        const { nombre, calorias, esVegana } = comida;
        console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        return {
            ...comida,
            calorias: nuevasCalorias
        };
    }
}