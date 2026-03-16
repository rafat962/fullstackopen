import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function Experience({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const addEntry = () => {
    onChange([...data, { 
      id: Date.now(), 
      company: '', 
      position: '', 
      responsibilities: '', 
      from: '', 
      until: '' 
    }]);
  };

  const removeEntry = (id) => {
    onChange(data.filter(item => item.id !== id));
  };

  const updateEntry = (id, field, value) => {
    onChange(data.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  if (!isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Experience</h2>
          <button
            onClick={handleEdit}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="space-y-6">
          {data.map((item) => (
            <div key={item.id} className="border-l-4 border-emerald-500 pl-4">
              <p className="font-bold text-gray-900">{item.company}</p>
              <p className="text-gray-700 font-medium">{item.position}</p>
              <p className="text-sm text-gray-500 mb-2">{item.from} - {item.until}</p>
              <p className="text-gray-600 whitespace-pre-wrap">{item.responsibilities}</p>
            </div>
          ))}
          {data.length === 0 && <p className="text-gray-500 italic">No experience entries added.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Experience</h2>
        <button
          onClick={addEntry}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
        >
          <Plus size={18} /> Add Entry
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {data.map((item) => (
          <div key={item.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50 relative">
            <button
              type="button"
              onClick={() => removeEntry(item.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  value={item.company}
                  onChange={(e) => updateEntry(item.id, 'company', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Tech Corp"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position Title</label>
                <input
                  type="text"
                  value={item.position}
                  onChange={(e) => updateEntry(item.id, 'position', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Software Engineer"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                  <input
                    type="text"
                    value={item.from}
                    onChange={(e) => updateEntry(item.id, 'from', e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="Jan 2020"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Until Date</label>
                  <input
                    type="text"
                    value={item.until}
                    onChange={(e) => updateEntry(item.id, 'until', e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="Present"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Main Responsibilities</label>
                <textarea
                  value={item.responsibilities}
                  onChange={(e) => updateEntry(item.id, 'responsibilities', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-h-[100px]"
                  placeholder="Describe your role and achievements..."
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
