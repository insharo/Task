import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allows requests from any origin. Use a specific origin in production for security.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Allows cookies and authorization headers.
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
