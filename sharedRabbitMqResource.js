const amqp = require('amqplib');
const uri = 'amqp://localhost:5672';//

module.exports  = amqp.connect(uri)



//let channel;
// amqp.connect(uri).then(conn =>{
//     channel = conn.createChannel();
// }).catch(err => {console.log(err + 'sharedRabbitMqResource')})

//module.exports = channel;//amqp.connect(uri);


