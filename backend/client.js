//Establishing connection to kafka and mysql database
const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.0.163:9092"],
});
