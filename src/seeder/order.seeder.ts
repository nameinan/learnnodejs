
import { createConnections, Entity, getManager } from "typeorm";
import faker from 'faker';
import {randomInt} from "crypto";
import { Order } from "../entity/order.entity";
import { OrderItem } from "../entity/order-item.entity";



createConnections().then( async connection =>{

    const orderRepository = getManager().getRepository(Order);
    const orderItemRepository = getManager().getRepository(OrderItem);
    for(let i=0;i< 30;i++){
       const order= await orderRepository.save({
           first_name: faker.name.findName(),
           last_name: faker.name.findName(),
           email: faker.internet.email(),
           created_at: faker.date.past(2).toDateString()
        });

        
        for(let j=0;j < randomInt(1,5);j++){
            await orderItemRepository.save({
                order,
                product: faker.lorem.words(),
                price: randomInt(10,100),
                quantity: randomInt(1,5)
            });
        }

    }
    process.exit(0);
    
});