'use client';
import { useEffect, useState, use } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function StoryPage({ params }) {
  const { id } = use(params);
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function fetchStory() {
      const { data } = await supabase.from('stories').select('*').eq('id', id).single();
      if (data) setStory(data);
    }
    fetchStory();
  }, [id]);

  if (!story) return <p style={{ textAlign: 'center' }}>جاري فتح القصة...</p>;

  return (
    <article style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h1>{story.title}</h1>
      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '16px 0' }} />
      <p style={{ lineHeight: '1.8', fontSize: '18px', whiteSpace: 'pre-line' }}>{story.content}</p>
    </article>
  );
}
