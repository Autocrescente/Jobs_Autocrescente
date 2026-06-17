import { useState } from 'react'
import Hero from './components/Hero'
import JobBoard from './components/JobBoard'
import JobDetail from './components/JobDetail'

export default function App() {
  const [selectedJob, setSelectedJob] = useState(null)

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
  }

  return (
    <div className="min-h-screen font-sans bg-white">
      <Hero />
      <JobBoard onSelectJob={setSelectedJob} />
    </div>
  )
}
