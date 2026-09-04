'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import StoryCard from '@/components/StoryCard';

export default function HomePage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStories() {
      // جلب القصص من جدول stories في Supabase
      const { data, error } = await supabase.from('stories').select('*');
      if (!error && data) {
        setStories(data);
      }
      setLoading(false);
    }

    fetchStories();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '24px 0' }}>أحدث القصص</h1>
      {loading ? (
        <p style={{ textAlign: 'center' }}>جاري تحميل القصص...</p>
      ) : stories.length > 0 ? (
        stories.map((story) => <StoryCard key={story.id} story={story} />)
      ) : (
        <p style={{ textAlign: 'center' }}>لا توجد قصص متوفرة حالياً.</p>
      )}
    </div>
  );
}
