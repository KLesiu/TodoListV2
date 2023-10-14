import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  await app.listen("https://sore-pear-viper-tux.cyclic.app/");
}
bootstrap();
