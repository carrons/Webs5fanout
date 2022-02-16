const amqp = require('amqplib');
const uri = 'amqp://localhost:5672';

let msg = process.argv.slice(2).join(' ') || 'hello world';

const publish = async ()=>{ 
    try {
          console.log('Running....');
          const connection = await amqp.connect(uri);
        
          channel = await connection.createChannel();
        
          await channel.assertExchange("fanoutTest","fanout",{duable:false}); 
          await channel.publish("fanoutTest","",Buffer.from(JSON.stringify(msg)));  
          
          console.log('message is naar queue verzonden :'+ msg); 
        }catch (error) {
          console.log ('err in publisher : ' +error);
    }
  }

  publish();