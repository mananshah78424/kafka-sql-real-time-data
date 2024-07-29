//The producer will send train data messages to our Kafka topics.

const { Kafka } = require("kafkajs");
const stompit = require("stompit");
const async = require("async");

const KafkaProducer = new Kafka({
  clientId: "train_producer",
  brokers: ["192.168.0.163:9092"],
}).producer();

const initKafkaProducer = async () => {
  try {
    await KafkaProducer.connect();
    console.log("Prodcuer connected successfully");
  } catch (error) {
    console.log("Error connecting to producer ", error.message);
    process.exit(1);
  }
};
