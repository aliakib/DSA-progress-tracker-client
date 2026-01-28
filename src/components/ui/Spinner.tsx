interface SpinnerProps {
  size?: 'sm' | 'md';
}

const Spinner = ({ size = 'sm' }: SpinnerProps) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-5 w-5 border-2',
  };

  return (
    <span
      className={`inline-block animate-spin rounded-full border-current border-t-transparent ${sizes[size]}`}
      role="status"
      aria-label="loading"
    />
  );
};

export default Spinner;