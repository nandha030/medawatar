import React from 'react';
import { useUser } from '../../../hooks/useUser';
import { DashboardLayout } from '../DashboardLayout';
import { DashboardSidebar } from '../DashboardSidebar';
import { MessageSquare, Search, User } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const MessagesDashboard = () => {
  const { user, loading } = useUser();

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-quantum-900 to-quantum-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      lastMessage: 'Your test results look good...',
      time: '2h ago',
      unread: 2
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Primary Care',
      lastMessage: 'How are you feeling today?',
      time: '4h ago',
      unread: 0
    }
  ];

  return (
    <DashboardLayout>
      <DashboardSidebar user={user} />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-white">Messages</h1>
                <p className="text-gray-400 mt-1">Communicate with your healthcare team</p>
              </div>
              <Button>
                <MessageSquare className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                className="w-full p-4 flex items-center hover:bg-white/5 transition-colors border-b border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div className="ml-4 flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium">{conversation.name}</h3>
                    <span className="text-sm text-gray-400">{conversation.time}</span>
                  </div>
                  <p className="text-sm text-gray-400">{conversation.role}</p>
                  <p className="text-sm text-gray-300 mt-1">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <div className="ml-4 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-xs text-white">{conversation.unread}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};