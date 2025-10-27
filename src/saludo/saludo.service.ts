import { Injectable } from '@nestjs/common';

@Injectable()
export class SaludoService {
  getSaludo(): string {
    return '¡Hola desde el servicio de saludo!';
  }
}
