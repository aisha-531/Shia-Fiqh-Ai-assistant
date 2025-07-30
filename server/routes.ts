import { createServer } from "http";
import { generateFiqhResponse } from "./openai.js";

export async function registerRoutes(app: any) {
  app.post("/api/chat", async (req: any, res: any) => {
    try {
      const { message } = req.body;
      const response = await generateFiqhResponse(message);
      res.json({ response });
    } catch (error) {
      res.status(500).json({ error: "AI service unavailable" });
    }
  });

  return createServer(app);
}
