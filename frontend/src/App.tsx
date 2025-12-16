import { useEffect, useState } from 'react';

type HealthResponse = {
  id: number;
  status: string;
  createdAt: string;
};

function App() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main
      style={{
        padding: 32,
        fontFamily: 'system-ui, sans-serif',
        maxWidth: 720,
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
        backgroundColor: '#121212',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: 32, width: '100%' }}>
        <h1 style={{ margin: 0, marginBottom: 8 }}>Frontend successfully running</h1>
        <p style={{ margin: 0, color: '#e0e0e0' }}>
          The frontend is up and communicating with the backend through Docker.
        </p>
      </header>

      {error && (
        <div style={{ color: '#ff8a80' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {!error && !data && <p>Loading backend health data…</p>}

      {data && (
        <section
          style={{
            border: '1px solid #424242',
            borderRadius: 8,
            padding: 24,
            background: '#333333',
            marginTop: 24,
            width: '100%',
            boxSizing: 'border-box',
            color: '#ffffff',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 16 }}>Backend health status</h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Status:</strong> {data.status}
            </li>

            <li style={{ marginBottom: 12 }}>
              <strong>Total requests to this endpoint:</strong>{' '}
              {data.id}
            </li>

            <li>
              <strong>Last request at:</strong>{' '}
              {new Date(data.createdAt).toLocaleString()}
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}

export default App;
