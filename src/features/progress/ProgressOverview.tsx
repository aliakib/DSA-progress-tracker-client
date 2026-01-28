import { useAppSelector } from '../../hooks/useAppSelector';
import ProgressTile from '../../components/ui/ProgressTile';

type Difficulty = 'Easy' | 'Medium' | 'Tough';

const ProgressOverview = () => {
    const topics = useAppSelector((state) => state.topics.list);
    const progressMap = useAppSelector((state) => state.progress.map);

    const stats: Record<
        Difficulty,
        { total: number; completed: number }
    > = {
        Easy: { total: 0, completed: 0 },
        Medium: { total: 0, completed: 0 },
        Tough: { total: 0, completed: 0 },
    };

    topics.forEach((topic) => {
        topic.problems.forEach((problem) => {
            const diff = problem.difficulty;
            stats[diff].total += 1;

            if (progressMap[problem.slug]) {
                stats[diff].completed += 1;
            }
        });
    });

    return (
        <div className="max-w-6xl mx-auto md:px-2 lg:px-2">

            <div className="space-y-6">
                <h1 className="text-xl font-semibold">
                    Progress Overview
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Object.entries(stats).map(
                        ([difficulty, { total, completed }]) => {
                            const percent =
                                total === 0
                                    ? 0
                                    : Math.round((completed / total) * 100);

                            return (
                                <ProgressTile
                                    key={difficulty}
                                    title={difficulty}
                                    completed={completed}
                                    total={total}
                                    percentage={percent}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProgressOverview;
