import express from 'express';
import Conversation from '../models/Conversation.js'; // Ensure this path is correct

const router = express.Router();

// Get all conversations
router.get('/', async (req, res) => {
  try {
    const conversations = await Conversation.find();
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;