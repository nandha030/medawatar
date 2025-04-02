import { db } from './index';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  updatedAt: Date;
}

export async function sendMessage(data: Omit<Message, 'id' | 'createdAt'>) {
  const message = await db.messages.add({
    ...data,
    createdAt: new Date()
  });

  // Update conversation
  const conversationId = await getConversationId(data.senderId, data.receiverId);
  await db.conversations.update(conversationId, {
    lastMessage: message,
    updatedAt: new Date()
  });

  return message;
}

export async function getMessages(conversationId: string) {
  return db.messages
    .where('conversationId')
    .equals(conversationId)
    .sortBy('createdAt');
}

export async function getConversations(userId: string) {
  return db.conversations
    .where('participants')
    .anyOf(userId)
    .reverse()
    .sortBy('updatedAt');
}

export async function markAsRead(messageId: string) {
  return db.messages.update(messageId, { read: true });
}

async function getConversationId(user1Id: string, user2Id: string) {
  const conversation = await db.conversations
    .where('participants')
    .equals([user1Id, user2Id].sort())
    .first();

  if (!conversation) {
    return db.conversations.add({
      participants: [user1Id, user2Id].sort(),
      updatedAt: new Date()
    });
  }

  return conversation.id;
}