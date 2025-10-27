import { Controller } from '@nestjs/common';
import { SaludoService } from './saludo.service';

@Controller('saludo')
export class SaludoController {
  constructor(private readonly saludoService: SaludoService) {}

  getSaludo(): string {
    return this.saludoService.getSaludo();
  }
}
