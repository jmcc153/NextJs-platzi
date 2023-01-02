import Database from "../../../database/db"

const allAvo = async (req,res) => {
    const db = new Database()
    const idEntry = await db.getById(req.query.id)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(idEntry)

}

export default allAvo