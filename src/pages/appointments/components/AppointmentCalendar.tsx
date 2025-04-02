import React from 'react';
import { Calendar, Plus } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import type { User } from '../../../lib/db';

interface AppointmentCalendarProps {
  user: User;
  onNewAppointment: () => void;
}

export const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({ user, onNewAppointment }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Calendar</h2>
          <p className="text-sm text-gray-400">Manage your appointments</p>
        </div>
        {user.userType === 'PATIENT' && (
          <Button onClick={onNewAppointment}>
            <Plus className="w-4 h-4 mr-2" />
            Book Appointment
          </Button>
        )}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {/* Calendar header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm text-gray-400 py-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {Array.from({ length: 35 }).map((_, index) => {
          const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index - selectedDate.getDay() + 1);
          const isToday = date.toDateString() === new Date().toDateString();
          const hasAppointments = Math.random() > 0.7; // Replace with actual appointment check

          return (
            <button
              key={index}
              className={`
                aspect-square p-2 rounded-lg relative
                ${isToday ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-white/5'}
                ${date.getMonth() === selectedDate.getMonth() ? 'text-white' : 'text-gray-600'}
              `}
            >
              <span className="text-sm">{date.getDate()}</span>
              {hasAppointments && (
                <span className="absolute bottom-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};