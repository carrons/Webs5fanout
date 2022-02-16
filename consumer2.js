const amqp = require('amqplib');
const uri = 'amqp://localhost:5672';

const consume = async ()=>{
    try { 
        const connection = await amqp.connect(uri);
        
        channel = await connection.createChannel();
        
        await channel.assertExchange('fanoutTest','fanout',{durable:true})
        await channel.assertQueue("",{ exclusive: false});
        await channel.bindQueue("","fanoutTest","");
        await channel.consume("", message =>{
            let msg = JSON.parse(message.content);
           
            console.log(`${msg} in consumer 2`);
          
            channel.ack(message);
        }); 

    } catch (error) {
        console.log (`error is: ${error}`);
    }
}
consume();
