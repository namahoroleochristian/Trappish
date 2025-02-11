import express, { json } from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
import Routes from './routes/Product.route.js'
import usersRoutes from './routes/Auth.routes.js'
import cors from 'cors'


dotenv.config();
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT;
const allowedOrigins =["http://localhost:3040","http://localhost:3000"]
const app = express();

ConnectDB();
    

app.use(express.json());
app.use(cors({origin: allowedOrigins})) 
app.use('/api',Routes)
app.use('/api/users',usersRoutes)

app.listen(PORT, () => {
  console.log("running on http://localhost:3040");
});



// Ua8btcYDW629zkPP                     cluster password
