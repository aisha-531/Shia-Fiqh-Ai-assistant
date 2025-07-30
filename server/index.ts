import express from "express";
import { registerRoutes } from "./routes.js";

const app = express();
app.use(express.json());

const server = await registerRoutes(app);
const port = parseInt(process.env.PORT || '5000', 10);

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
