import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.listen("https://todo-list-v2-api.vercel.app/")
}
bootstrap();
