import { useState } from "react";
import LandingHero from "./components/LandingHero";
import CompanyGrid from "./components/CompanyGrid";
import MissionSection from "./components/MissionSection";
import CompanyDetail from "./components/CompanyDetail";
import Hero from "./components/Hero";
import JobBoard from "./components/JobBoard";
import JobDetail from "./components/JobDetail";

export default function App() {
  const [page, setPage] = useState("landing");
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  if (selectedCompany) {
    return (
      <CompanyDetail
        company={selectedCompany}
        onBack={() => setSelectedCompany(null)}
        onSelectJob={setSelectedJob}
      />
    );
  }

  if (page === "jobs") {
    return (
      <div className="min-h-screen font-sans bg-white">
        <Hero onBack={() => setPage("landing")} />
        <JobBoard onSelectJob={setSelectedJob} />
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-white">
      <LandingHero onGoToJobs={() => setPage("jobs")} />
      <CompanyGrid onSelectCompany={setSelectedCompany} />
      <MissionSection />
    </div>
  );
}
