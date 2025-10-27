import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaludoService } from './saludo/saludo.service';
import { SaludoController } from './saludo/saludo.controller';

@Module({
  imports: [],
  controllers: [AppController, SaludoController],
  providers: [AppService, SaludoService],
})
export class AppModule {}
