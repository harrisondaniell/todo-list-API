import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);
app.use(userRouter);
app.use(taskRouter);

app.use(cors());

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(cors(corsOptions));

export default app;
