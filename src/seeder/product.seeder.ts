
import { createConnections, Entity, getManager } from "typeorm";
import { Product } from "../entity/product.entity";
import faker from 'faker';
import {randomInt} from "crypto";



createConnections().then( async connection =>{
    const repository = getManager().getRepository(Product);
    for(let i=0;i< 30;i++){
        await repository.save({
           title: faker.lorem.words(2),
           description:faker.lorem.words(20),
           image: faker.image.imageUrl(200,200,'',true),
           price: randomInt(10,200)
        });
    }
     process.exit(0);

});