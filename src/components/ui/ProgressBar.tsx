interface ProgressBarProps {
    value: number; // 0 - 100
}

const ProgressBar = ({ value }: ProgressBarProps) => {
    return (
        <div className="w-full">
            <div className="h-3 w-full bg-gray-200 rounded-2xl overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${value}%` }}
                />
            </div>

        </div>
    );
};

export default ProgressBar;