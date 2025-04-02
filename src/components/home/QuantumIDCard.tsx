import React from 'react';
import { Shield, Star, Building, User } from 'lucide-react';
import { generateQuantumId } from '../../lib/utils';

// Simple QR-like pattern for visualization
const SimpleQRCode = ({ value, size = 100 }) => {
  const gridSize = 6;
  const cellSize = size / gridSize;
  
  // Generate a deterministic pattern based on the value
  const getPattern = () => {
    const pattern = [];
    const hash = value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    for (let i = 0; i < gridSize * gridSize; i++) {
      pattern.push(((hash + i) % 3) === 0);
    }
    
    return pattern;
  };

  const pattern = getPattern();

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="bg-white">
      {pattern.map((filled, i) => {
        const x = (i % gridSize) * cellSize;
        const y = Math.floor(i / gridSize) * cellSize;
        return filled ? (
          <rect
            key={i}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            fill="black"
          />
        ) : null;
      })}
      {/* Fixed corner markers for QR-like appearance */}
      <rect x={0} y={0} width={cellSize * 2} height={cellSize * 2} fill="black" />
      <rect x={size - cellSize * 2} y={0} width={cellSize * 2} height={cellSize * 2} fill="black" />
      <rect x={0} y={size - cellSize * 2} width={cellSize * 2} height={cellSize * 2} fill="black" />
    </svg>
  );
};

interface QuantumIDCardProps {
  userType?: 'patient' | 'doctor' | 'provider' | 'researcher';
  name?: string;
  specialization?: string;
  bloodType?: string;
  emergencyContact?: string;
  allergies?: string;
  quantumID?: string;
  className?: string;
}

export const QuantumIDCard: React.FC<QuantumIDCardProps> = ({
  userType = 'PATIENT',
  name = 'John Doe',
  specialization = '',
  bloodType = 'A+',
  emergencyContact = '+1 234-567-8900',
  allergies = 'None',
  quantumID = generateQuantumId(),
  className = ''
}) => {
  const cardThemes = {
    PATIENT: {
      gradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
      icon: User,
      accent: 'border-blue-400'
    },
    DOCTOR: {
      gradient: 'bg-gradient-to-r from-green-500 to-emerald-600',
      icon: Shield,
      accent: 'border-green-400'
    },
    RECEPTION: {
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-600',
      icon: Building,
      accent: 'border-pink-400'
    },
    STAFF: {
      gradient: 'bg-gradient-to-r from-sky-500 to-blue-600',
      icon: User,
      accent: 'border-sky-400'
    },
    HEALTHCARE_PROVIDER: {
      gradient: 'bg-gradient-to-r from-orange-500 to-amber-600',
      icon: Building,
      accent: 'border-orange-400'
    },
    RESEARCH_PARTNER: {
      gradient: 'bg-gradient-to-r from-purple-500 to-violet-600',
      icon: Star,
      accent: 'border-purple-400'
    },
    TECH_PARTNER: {
      gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      icon: Shield,
      accent: 'border-cyan-400'
    },
    SECURITY_PROVIDER: {
      gradient: 'bg-gradient-to-r from-red-500 to-pink-600',
      icon: Shield,
      accent: 'border-red-400'
    },
    INSURANCE_PARTNER: {
      gradient: 'bg-gradient-to-r from-amber-500 to-yellow-600',
      icon: Building,
      accent: 'border-amber-400'
    },
    TRAVEL_PARTNER: {
      gradient: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      icon: Building,
      accent: 'border-indigo-400'
    }
  };

  const theme = cardThemes[userType] || cardThemes.PATIENT;
  const Icon = theme.icon;

  // Generate a unique pattern for the card background
  const generatePattern = () => {
    const pattern = [];
    for (let i = 0; i < 5; i++) {
      pattern.push(`${Math.random() * 100}% ${Math.random() * 100}%`);
    }
    return pattern.join(', ');
  };

  return (
    <div className={`transform hover:scale-105 transition-transform duration-300 w-full ${className}`}>
      <div className={`relative p-6 rounded-2xl aspect-[1.6/1] ${theme.gradient} shadow-2xl overflow-hidden backdrop-blur-xl`}>
        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-20 animate-pulse"></div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${generatePattern()}, rgba(255,255,255,0.1) 2px, transparent 2px)`,
            backgroundSize: '24px 24px'
          }}></div>
          
          {/* Shimmering effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 animate-shimmer"></div>
        </div>
        
        {/* Card Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="text-white/90 text-sm font-medium tracking-wider uppercase mb-1">Quantum Health ID</div>
            <div className="text-white font-bold text-xl tracking-wide">{name}</div>
            {specialization && (
              <div className="text-white/90 text-sm mt-1 font-medium tracking-wide">{specialization}</div>
            )}
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-sm"></div>
            <div className="relative bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <Icon className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-lg blur-sm"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-xl">
            <SimpleQRCode value={quantumID} size={60} />
            </div>
          </div>
          <div className="ml-4">
            <div className="text-white/90 text-sm font-medium tracking-wider uppercase mb-1">Quantum ID</div>
            <div className="text-white font-mono text-sm tracking-wider">{quantumID}</div>
          </div>
        </div>

        {/* Emergency Information */}
        {userType === 'patient' && (
          <div className="space-y-3 text-sm backdrop-blur-sm bg-white/5 rounded-xl p-3">
            <div className="flex justify-between">
              <span className="text-white/90 font-medium tracking-wide">Blood Type</span>
              <span className="text-white font-semibold tracking-wider">{bloodType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/90 font-medium tracking-wide">Emergency</span>
              <span className="text-white font-semibold tracking-wider">{emergencyContact}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/90 font-medium tracking-wide">Allergies</span>
              <span className="text-white font-semibold tracking-wider">{allergies}</span>
            </div>
          </div>
        )}

        {/* Verification Seal */}
        <div className="absolute bottom-4 right-4 flex items-center">
          <div className="mr-2 w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
          <div className="text-white/60 text-xs font-medium tracking-wider uppercase">Quantum-Secured</div>
        </div>

        {/* Security Chip */}
        <div className="absolute top-6 right-20 w-8 h-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm transform -rotate-45"></div>
      </div>
    </div>
  );
};