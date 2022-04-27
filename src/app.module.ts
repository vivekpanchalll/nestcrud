import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [ContactsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: ["dist/**/*.entity{.ts,.js}"],
      cli:{
        entitiesDir :'src/vivek'
      },
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
