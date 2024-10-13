import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Employees project',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  }
  
    apis: ['./src/routes/userRoutes.*.ts'],
}
connectDB();

// Routes
app.use("/api", userRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
