import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

// Note: I know that is better to use a .env file to store the environment variables, but for the sake of simplicity, I'm using the dotenv package to load the environment variables from a .env file.
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root123',
  database: process.env.DB_NAME || 'inventory_db',
  autoLoadEntities: true, 
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
};
