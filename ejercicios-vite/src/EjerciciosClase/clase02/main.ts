import { ComidaService } from './comida-service';
import { NotificadorComida } from './notificador-comida';
import { pizza, ensalada, hamburguesa } from './comidas';

const comidaService = new ComidaService();
const notificador = new NotificadorComida(comidaService);

notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

const pizzaModificada = comidaService.modificarCalorias(pizza, 500);
notificador.notificar(pizzaModificada);