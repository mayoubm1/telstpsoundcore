import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  async function fetchEpisodes() {
    const { data } = await supabase.from('episodes').select();
    setEpisodes(data || []);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">TELsTP Sonic Core</h1>
      <p className="text-lg mb-6">Unified sound system for "From Fire in the Void to Edited Genomes"</p>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Episodes</h2>
        {episodes.map(ep => (
          <div key={ep.id} className="border-b py-2">
            <strong>{ep.title}</strong> – {ep.status} ({ep.progress}%)
          </div>
        ))}
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Send to Character AI
      </button>
    </div>
  );
};

export default Dashboard;