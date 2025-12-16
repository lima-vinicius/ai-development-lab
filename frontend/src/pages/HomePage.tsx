import { useEffect, useState } from 'react';
import { fetchHealthStatus } from '../api/healthApi';
import type { HealthResponse } from '../types/health';
import { ErrorMessage } from '../components/ErrorMessage';
import { HealthStatusCard } from '../components/HealthStatusCard';
import { LoadingMessage } from '../components/LoadingMessage';

export function HomePage() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHealthStatus()
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

      {error && <ErrorMessage message={error} />}

      {!error && !data && <LoadingMessage />}

      {data && <HealthStatusCard data={data} />}
    </main>
  );
}
