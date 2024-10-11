import app from "./app.js";
import "dotenv/config";
import userRouter from "./routes/user.route.js";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOST = "0.0.0.0";

app.use(userRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
