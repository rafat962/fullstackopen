import { Mail, Phone, MapPin } from 'lucide-react';

export default function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 min-h-[800px] sticky top-8">
      {/* Header */}
      <header className="border-b-2 border-gray-200 pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
          {generalInfo.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          {generalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={16} className="text-blue-600" />
              <span>{generalInfo.email}</span>
            </div>
          )}
          {generalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={16} className="text-blue-600" />
              <span>{generalInfo.phone}</span>
            </div>
          )}
        </div>
      </header>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-1 mb-4 uppercase tracking-wider">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.company}</h3>
                <span className="text-sm font-medium text-gray-500">{item.from} — {item.until}</span>
              </div>
              <p className="text-blue-600 font-semibold mb-2 italic">{item.position}</p>
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                {item.responsibilities}
              </p>
            </div>
          ))}
          {experience.length === 0 && <p className="text-gray-400 italic text-sm">No experience listed.</p>}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-1 mb-4 uppercase tracking-wider">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-800">{item.school}</h3>
                <span className="text-sm font-medium text-gray-500">{item.date}</span>
              </div>
              <p className="text-gray-700 text-sm">{item.title}</p>
            </div>
          ))}
          {education.length === 0 && <p className="text-gray-400 italic text-sm">No education listed.</p>}
        </div>
      </section>
    </div>
  );
}
