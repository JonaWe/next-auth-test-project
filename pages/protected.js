import { useSession } from 'next-auth/client';
import { useEffect, useState } from 'react';
import AccessDenied from '../components/AccessDenied';

export default function Page() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/protected');
      const json = await res.json();
      if (json.content) setContent(json.content);
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  if (!session) return <AccessDenied />;

  return (
    <>
      <h1>Protected Page</h1>
      <p>{content}</p>
    </>
  );
}
