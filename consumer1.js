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
           
            console.log(`${msg} in consumer 1`);
            //Hier een check wat de opdracht in de message inhoud en wat er mee moet gebeuren.
            //Bedenk of je bij het uitlezen van de payload dat hier moet doen of dat het beter 
            //is om daar een aparte module/class voor aan te maken
            //dto.storeMessage(msg);
            //channel.ack(message);
        }); 

    } catch (error) {
        console.log (`error is: ${error}`);
    }
}
consume();