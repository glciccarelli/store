import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { CategoryController } from './controllers/category/category.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { CostumersController } from './controllers/costumers/costumers.controller';
import { OrdersController } from './controllers/orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController, CategoryController, BrandsController, UsersController, CostumersController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
