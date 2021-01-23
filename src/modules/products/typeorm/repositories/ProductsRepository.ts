import {EntityRepository, Repository} from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{
  public async findByName(name: string): Promise<Product | void>{

    const product = await this.findOne({
      where:{
        name,
      }
    });

    return product;
  }


}
