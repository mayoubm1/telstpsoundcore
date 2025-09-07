import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const TimelineViewer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchTimeline();
  }, []);

  async function fetchTimeline() {
    const { data } = await supabase.from('timeline').select();
    setEvents(data || []);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Episode Timeline (Claude Sync)</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2">Time</th>
            <th className="py-2">Narration</th>
            <th className="py-2">Sound Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map(ev => (
            <tr key={ev.id} className="border-t">
              <td className="py-2">{ev.timecode}</td>
              <td>{ev.narration}</td>
              <td>{ev.sound_action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimelineViewer;