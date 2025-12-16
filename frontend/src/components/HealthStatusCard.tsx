import type { HealthResponse } from '../types/health';

type HealthStatusCardProps = {
  data: HealthResponse;
};

export function HealthStatusCard({ data }: HealthStatusCardProps) {
  return (
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
          <strong>Total requests to this endpoint:</strong> {data.id}
        </li>

        <li>
          <strong>Last request at:</strong>{' '}
          {new Date(data.createdAt).toLocaleString()}
        </li>
      </ul>
    </section>
  );
}
