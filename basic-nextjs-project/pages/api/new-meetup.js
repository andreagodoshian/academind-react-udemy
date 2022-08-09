import {MongoClient} from "mongodb" // npm install mongodb

/*
-Not about creating a component function
-Only contains functions with server-side code
...therefore, the code in these API routes isn't exposed to the client
*/

// async because "connect" returns a promise
// (OF COURSE IT DOES *eye roll*)
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body

        const client = await MongoClient.connect("mongodb+srv://root:___________@cluster0.gdywmwe.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message: "Meeting added."});
    }

}

export default handler;