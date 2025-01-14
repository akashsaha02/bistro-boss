const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());


const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const database = client.db("bistroDb");
    const userCollection = database.collection("users");
    const menuCollection = database.collection("menu");
    const reviewsCollection = database.collection("reviews");
    const cartsCollection = database.collection("carts");


    // User Collection
    app.post('/users', async (req, res) => {
      const user = req.body;

      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);

      if (existingUser) {
        res.send({ message: 'User already exists', insertedId: existingUser._id });
        return;
      }

      // Set default role to "normal" if not provided
      user.role = user.role || 'normal';

      const result = await userCollection.insertOne(user);
      res.json(result);
    });


    app.get('/users', async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    // Update User Role
    app.patch('/users/role/:id', async (req, res) => {
      const id = req.params.id;
      const { role } = req.body; // Expecting role: 'admin', 'premium', or 'normal'
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { role },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.json(result);
    });


    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.json(result);
    });


    // Menu Collection
    app.get('/menu', async (req, res) => {
      const menu = await menuCollection.find().toArray();
      res.send(menu);
    });


    // Review Collection
    app.get('/reviews', async (req, res) => {
      const reviews = await reviewsCollection.find().toArray();
      res.send(reviews);
    });


    // Carts Collection
    app.get('/carts', async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await cartsCollection.find(query).toArray();
      res.send(result);
    });

    app.post('/carts', async (req, res) => {
      const cart = req.body;
      const result = await cartsCollection.insertOne(cart);
      res.json(result);
    });

    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await cartsCollection.deleteOne(query);
      res.json(result);
    });


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Bistro Boss Server!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// poragsaha
// poragsaha
