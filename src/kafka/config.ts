import { Kafka } from "kafkajs";
const kafka = new Kafka({
    clientId: 'email-producer',
    brokers: [process.env.KAFKA_BROKER_URL],
    ssl: true,
    sasl: {
        mechanism: 'plain',
        username: process.env.KAFKA_KEY,
        password: process.env.KAFKA_SECRET
    }
});

export=kafka.producer();