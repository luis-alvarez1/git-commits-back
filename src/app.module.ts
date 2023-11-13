import { Module } from '@nestjs/common';

import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CommitsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
