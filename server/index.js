import express from "express";
import cookieParser from "cookie-parser";   
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import volunteerRoute from "./routes/volunteer.route.js";
import contactRoute from "./routes/contact.route.js";
import subscribeRoute from "./routes/subscribe.route.js";
dotenv.config({});

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use(cookieParser());    
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));
app.use("/api/admin",userRoutes);
app.use("/api/volunteer",volunteerRoute);
app.use("/api/contact",contactRoute);
app.use("/api/subscribe",subscribeRoute);
import "./controllers/monthlyReminderJob.js";

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

