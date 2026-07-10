import amqp from "amqplib";

let channel: amqp.Channel;

export const connectQueue = async () => {
    const connection = await amqp.connect(process.env.RABBITMQ_URL!);
    channel = await connection.createChannel();
    await channel.assertQueue("order_created", { durable: true });
    console.log("🐇 Order Service connected to RabbitMQ!");
};

export const publishOrderCreated = (orderData: any) => {
    if (channel) {
        channel.sendToQueue("order_created", Buffer.from(JSON.stringify(orderData)), { persistent: true });
    }
};