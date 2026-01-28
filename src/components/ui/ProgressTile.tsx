import ProgressBar from './ProgressBar';

interface Props {
  title: string;
  completed: number;
  total: number;
  percentage: number;
}

const ProgressTile = ({
  title,
  completed,
  total,
  percentage,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-medium mb-2">
        {title}
      </h2>

      <ProgressBar value={percentage} />

      <p className="mt-2 text-sm text-gray-600">
        {completed} / {total} completed
      </p>
    </div>
  );
};

export default ProgressTile;
