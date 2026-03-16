import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function Education({ data, onChange }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const addEntry = () => {
    onChange([...data, { id: Date.now(), school: '', title: '', date: '' }]);
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
          <h2 className="text-xl font-bold text-gray-800">Education</h2>
          <button
            onClick={handleEdit}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.id} className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-gray-900">{item.school}</p>
              <p className="text-gray-700">{item.title}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
          {data.length === 0 && <p className="text-gray-500 italic">No education entries added.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Education</h2>
        <button
          onClick={addEntry}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
        >
          <Plus size={18} /> Add Entry
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {data.map((item, index) => (
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
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input
                  type="text"
                  value={item.school}
                  onChange={(e) => updateEntry(item.id, 'school', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="University of Example"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title of Study</label>
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => updateEntry(item.id, 'title', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="Bachelor of Science"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Study</label>
                <input
                  type="text"
                  value={item.date}
                  onChange={(e) => updateEntry(item.id, 'date', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  placeholder="2018 - 2022"
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
