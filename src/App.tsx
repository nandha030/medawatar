import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Contact } from './pages/Contact';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { AppointmentsDashboard } from './pages/dashboard/appointments/AppointmentsDashboard';
import { MonitoringDashboard } from './pages/dashboard/monitoring/MonitoringDashboard';
import { MessagesDashboard } from './pages/dashboard/messages/MessagesDashboard';
import { ConsultationsDashboard } from './pages/dashboard/consultations/ConsultationsDashboard';
import { PatientsDashboard } from './pages/dashboard/patients/PatientsDashboard';
import { FacilitiesDashboard } from './pages/dashboard/facilities/FacilitiesDashboard';
import { StaffDashboard } from './pages/dashboard/staff/StaffDashboard';
import { AnalyticsDashboard } from './pages/dashboard/analytics/AnalyticsDashboard';
import { Settings } from './pages/settings/Settings';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UserManagement } from './pages/admin/components/users/UserManagement';
import { PartnerManagement } from './pages/admin/components/partners/PartnerManagement';
import { HealthRecords } from './pages/dashboard/health/HealthRecords';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Services } from './components/home/Services';
import { Partners } from './components/home/Partners';
import { RecentEvents } from './components/home/RecentEvents';
import { QuantumSecurity } from './pages/features/QuantumSecurity';
import { GeneticTesting } from './pages/features/GeneticTesting';
import { MedicalTourism } from './pages/features/MedicalTourism';
import { HealthcareProviders } from './pages/partners/HealthcareProviders';
import { TechnologyPartners } from './pages/partners/TechnologyPartners';
import { SecurityPartners } from './pages/partners/SecurityPartners';
import { InsurancePartners } from './pages/partners/InsurancePartners';
import { TravelPartners } from './pages/partners/TravelPartners';
import { ResearchPartners } from './pages/partners/ResearchPartners';
import { Footer } from './components/layout/Footer/Footer';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Services />
            <Partners />
            <RecentEvents />
          </>
        } />
        <Route path="/features/quantum-security" element={<QuantumSecurity />} />
        <Route path="/features/genetic-testing" element={<GeneticTesting />} />
        <Route path="/features/medical-tourism" element={<MedicalTourism />} />
        <Route path="/partners/healthcare-providers" element={<HealthcareProviders />} />
        <Route path="/partners/technology" element={<TechnologyPartners />} />
        <Route path="/partners/security" element={<SecurityPartners />} />
        <Route path="/partners/insurance" element={<InsurancePartners />} />
        <Route path="/partners/travel" element={<TravelPartners />} />
        <Route path="/partners/research" element={<ResearchPartners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/records" element={<HealthRecords />} />
        <Route path="/dashboard/appointments" element={<AppointmentsDashboard />} />
        <Route path="/dashboard/monitoring" element={<MonitoringDashboard />} />
        <Route path="/dashboard/messages" element={<MessagesDashboard />} />
        <Route path="/dashboard/consultations" element={<ConsultationsDashboard />} />
        <Route path="/dashboard/patients" element={<PatientsDashboard />} />
        <Route path="/dashboard/facilities" element={<FacilitiesDashboard />} />
        <Route path="/dashboard/staff" element={<StaffDashboard />} />
        <Route path="/dashboard/analytics" element={<AnalyticsDashboard />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/partners" element={<PartnerManagement />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;