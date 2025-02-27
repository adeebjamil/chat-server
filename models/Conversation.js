import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // Add other fields as necessary
});

const Conversation = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema);

export default Conversation;