import { Module } from '@nestjs/common';
import { AppFeatureModule } from './modules/app/app.module';
import { HealthModule } from './modules/health/health.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AppFeatureModule, HealthModule],
})
export class AppModule {}
