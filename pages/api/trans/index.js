




















import Trans from "../../../models/trans";
import db from "../../../lib/dbConnect"

export default async function handler(req, res) {
   if (req.methods !== "GET" || req.method !== "POST") {
    res.status(405).json({ error: "Only POST and GET methods are allowed"})
   }

   if (req.method == "GET") {
    await db.connect()

    const trans = await Trans.find({})
        
    await db.disconnect();

    res.status(200).json({ posts });
    return;
   } else if (req.method == "POST") {
    await db.connect()

    const { name, form, amount, date } = req.body

    const trans = await Post.create({
        name,
        form,
        amount,
        date,
    })
    await db.disconnect()

    res.status(201).json( {trans} )
   }
}