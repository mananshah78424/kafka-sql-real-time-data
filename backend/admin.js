const { Kafka } = require("kafkajs");

// Intialize kafka clinet
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.0.163:9092"],
});

//Admin client initialization
async function init() {
  const admin = exports.kafka.admin();
  console.log("Admin connecting...");
  await admin.connect();
  console.log("Admin connected");

  console.log("Creating topics - book_train, cancel_train");
  await admin.createTopics({
    topics: [
      { topic: "book_train", numPartitions: 2 },
      {
        topic: "cancel_train",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topics created successfully!");
  console.log("Disconnecting Admin..");
  await admin.disconnect();
}
init();
