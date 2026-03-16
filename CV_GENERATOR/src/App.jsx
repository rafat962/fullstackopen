import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';

export default function App() {
  // Initial sample data
  const [generalInfo, setGeneralInfo] = useState({
    fullName: 'Raafat Kamel Mohamed',
    email: 'rafatkamel96@gmail.com',
    phone: '+20-1026820685',
  });

  const [education, setEducation] = useState([
    {
      id: '1',
      school: 'Cairo University',
      title: 'Bachelor of Urban and Regional Planning',
      date: '2020–2025',
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: '1',
      company: 'Hydro',
      position: 'GIS Developer',
      from: 'Jun 2025',
      until: 'Sep 2025',
      responsibilities: 'Built real-time digital monitoring system for New Delta Project',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            CV Generator
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Build your professional resume in minutes
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Sections */}
          <div className="space-y-8">
            <GeneralInfo 
              data={generalInfo} 
              onChange={setGeneralInfo} 
            />
            <Education 
              data={education} 
              onChange={setEducation} 
            />
            <Experience 
              data={experience} 
              onChange={setExperience} 
            />
          </div>

          {/* Preview Section */}
          <div className="hidden lg:block">
            <CVPreview 
              generalInfo={generalInfo} 
              education={education} 
              experience={experience} 
            />
          </div>

          {/* Mobile Preview (Optional, but good for UX) */}
          <div className="lg:hidden mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 px-2">Live Preview</h2>
            <CVPreview 
              generalInfo={generalInfo} 
              education={education} 
              experience={experience} 
            />
          </div>
        </main>
      </div>
    </div>
  );
}
