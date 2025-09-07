import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const MotifLibrary = () => {
  const [motifs, setMotifs] = useState([]);

  useEffect(() => {
    fetchMotifs();
  }, []);

  async function fetchMotifs() {
    const { data } = await supabase.from('motifs').select();
    setMotifs(data || []);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Motif Library</h1>
      {motifs.map(motif => (
        <div key={motif.id} className="bg-white p-4 mb-4 rounded shadow">
          <h3 className="text-xl font-semibold">{motif.name}</h3>
          <p>{motif.description}</p>
          <p><strong>Use:</strong> {motif.usage}</p>
          <audio controls className="mt-2" src={motif.audio_url}></audio>
        </div>
      ))}
    </div>
  );
};

export default MotifLibrary;