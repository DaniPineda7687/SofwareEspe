import type { Comida } from './comida';
import { ComidaService } from './comida-service';

export class NotificadorComida {
    private comidaService: ComidaService;

    constructor(comidaService: ComidaService) {
        this.comidaService = comidaService;
    }

    notificar(comida: Comida): void {
        console.log("Notificando comida...");
        this.comidaService.mostrarInfo(comida);
        console.log("");
    }
}