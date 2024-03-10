
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://sandeep:sandeep@cluster0.a7nbnde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();

const db = client.db("skill");
const col = db.collection("user");

app.get('/home', (req, res) => {
    res.send("It is a Home Page-my page");
});

app.post('/insert', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    };
    console.log(userData);
    col.insertOne(userData);
    res.send("Data Received");
});

app.post('/login', async (req, res) => {
    console.log(req.body); // Log the request body to the console

    try {
        const { email, password } = req.body;
        const user = await col.findOne({ email: email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                res.status(200).json({ message: "Login Successful", user });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ message: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(8085, () => {
    console.log("Server running on port 8085");
});
