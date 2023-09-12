import express, {Response, Request} from 'express';
import dotenv from 'dotenv'
import { getAllMines } from './database';
import cors from 'cors';
import { getMine } from './database';

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

// Declare a route with a response
app.get('/', (req, res) => {
  res.send("What's up doc?!");
});

// Start the server
app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.BACKEND_PORT}`);
  });


app.get("/", (req: Request, res: Response) => {
    res.send("HELLO FROM EXPRESS + TS!!!!");
});


app.post('/get-mine', async(req, res) => {
    try{
        const body = req.body
        const {state, district, mine_name, mine_owner} = body
        const data = await getMine(state, district, mine_name, mine_owner)
        res.status(200).send({response: data})
    }
    catch(e){
        res.status(400).send('Error')
    }
})

app.get('/get-mines', async(req, res) => {
    try{
        const {body} = req.body
        const data = await getAllMines()
        res.status(200).send({response: data})
    }    catch(e){
        res.status(400).send('Error')
    }
})


