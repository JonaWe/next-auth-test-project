import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>NextAuth Test App</title>
      </Head>

      <main>
        {!session && (
          <>
            <p>Not signed in </p>
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            <p>Signed in as {session.user.email}</p>
            <p>{JSON.stringify(session.user, null, 2)}</p>
            <p>
              You are now able to access the{' '}
              <Link href="protected">protected page</Link>
            </p>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </div>
  );
}
