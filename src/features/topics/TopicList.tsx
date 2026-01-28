import { useEffect } from 'react';

import { fetchTopics } from './topics.thunks';
import { fetchProgress } from '../progress/progress.thunks';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import ProblemRow from './ProblemRow';
import TopicSkeleton from '../../components/common/TopicSkeleton';
import ProgressBar from '../../components/ui/ProgressBar';

const TopicList = () => {
    const dispatch = useAppDispatch();

    const { list, loading } = useAppSelector((state) => state.topics);
    const user = useAppSelector(state => state.auth.user)
    const progressMap = useAppSelector((state) => state.progress.map);

    useEffect(() => {
        dispatch(fetchTopics());
        dispatch(fetchProgress());
    }, [dispatch]);

    if (loading) {
        return <TopicSkeleton />;
    }

    return (
        <div className="max-w-6xl mx-auto md:px-2 lg:px-2">
            <h1 className="text-xl font-semibold mb-4">
                Hi {user?.name}!
            </h1>
            <div className="space-y-6 md:space-y-8">
                {list.map((topic) => {
                    const completedCount = topic.problems.filter(
                        (p) => progressMap[p.slug] === true
                    ).length;

                    const percentage = Math.round(
                        (completedCount / topic.problems.length) * 100
                    );

                    return (
                        <div
                            key={topic._id}
                            className="bg-white rounded-lg shadow overflow-hidden"
                        >
                            {/* Topic Header */}
                            {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 border-b">
                                <h2 className="text-base sm:text-lg font-semibold">
                                    {topic.title}
                                </h2>

                                <span className="text-xs sm:text-sm text-gray-600">
                                    {percentage}% completed
                                </span>
                            </div> */}
                            <div className="flex flex-col gap-2 px-4 py-3 border-b">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                    <h2 className="text-base sm:text-lg font-semibold">
                                        {topic.title}
                                    </h2>

                                    <span className="text-xs sm:text-sm text-gray-600">
                                        {completedCount}/{topic.problems.length} completed
                                    </span>
                                </div>

                                <ProgressBar value={percentage} />
                            </div>

                            {/* Problems */}
                            <div>
                                {topic.problems.map((problem) => (
                                    <ProblemRow
                                        key={problem.slug}
                                        problem={problem}
                                        completed={progressMap[problem.slug] === true}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopicList;
