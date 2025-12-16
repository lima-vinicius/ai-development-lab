type ErrorMessageProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ color: '#ff8a80' }}>
      <strong>Error:</strong> {message}
    </div>
  );
}
