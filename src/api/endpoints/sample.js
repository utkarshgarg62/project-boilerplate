import { Router } from "express";
import apiKeyMiddleware from "../middlewares/apiKeyMiddleware.js";

const router = Router();

// ✅ GET 
router.get("/", apiKeyMiddleware, async (req, res) => {
    res.json({ ok: true, message: 'API is working' });
});

export default router;