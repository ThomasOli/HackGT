// const { MongoClient, ServerApiVersion } = require('mongodb');

// async function run(email, password) {
//   const uri =
//   "mongodb+srv://gators:G8t0rs@cluster0.tt5rvec.mongodb.net/?retryWrites=true&w=majority";

//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

//   await client.connect();

//   const dbName = "HackGTData";
//   const collectionName = "userData";

//   const database = client.db(dbName);
//   const collection = database.collection(collectionName);

//   const document =
//     {
//       email: email,
//       password: password
//     };

//   try {
//     const insertOneResult = await collection.insertOne(document);
//     console.log(`${insertOneResult.insertedCount} document successfully inserted.\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
//   }
  
// }

// export default run;