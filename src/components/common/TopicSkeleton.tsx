const TopicSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto">

            <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="bg-white rounded shadow p-4 animate-pulse"
                    >
                        <div className="h-5 w-40 bg-gray-200 rounded mb-4" />

                        {[1, 2, 3].map((j) => (
                            <div
                                key={j}
                                className="h-4 bg-gray-200 rounded mb-2"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopicSkeleton;