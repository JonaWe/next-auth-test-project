import { signIn } from 'next-auth/client';

export default function AccessDenied() {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ color: 'red' }}>Access Denied!</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
