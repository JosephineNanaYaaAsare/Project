import db from "../../../lib/dbConnect";
import Transact from "../../../models/transact"

export async function handler(req, res) {
    if (req.methods == "GET") {
        const { transactId } = req.params;
        
        await db.connect();
        const transact = await Post.findById(transact)
        db.disconnect();

        if (!transact) {
            res.status(404).json({ message: "Transaction Not Found"});
            return
        }
        res.status(200).json({ transact })
    }
}