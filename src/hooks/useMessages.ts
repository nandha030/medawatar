import { useState, useEffect } from 'react';
import { getConversations, getMessages } from '../lib/db/messages';
import type { Message, Conversation } from '../lib/db/messages';

export function useConversations(userId: string) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      getConversations(userId)
        .then(conversations => {
          setConversations(conversations);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching conversations:', error);
          setLoading(false);
        });
    }
  }, [userId]);

  return { conversations, loading };
}

export function useMessages(conversationId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (conversationId) {
      getMessages(conversationId)
        .then(messages => {
          setMessages(messages);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
          setLoading(false);
        });
    }
  }, [conversationId]);

  return { messages, loading };
}