import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestigationsModule } from './investigations/investigations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InvestigationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
