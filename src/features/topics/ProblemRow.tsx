import { toggleProgress } from '../progress/progress.thunks';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import type { Problem } from './topics.types';
import Badge from '../../components/ui/Badge';

interface Props {
    problem: Problem;
    completed: boolean;
}

const ProblemRow = ({ problem, completed }: Props) => {
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(toggleProgress(problem.slug));
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 border-b last:border-b-0">
            {/* Left side */}
            <div className="flex items-start sm:items-center gap-3">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleToggle}
                    className="h-5 w-5 sm:h-4 sm:w-4 mt-1 sm:mt-0 accent-primary cursor-pointer"
                />

                <div>
                    <p
                        className={`text-sm inline-block mr-2 ${completed ? 'line-through text-gray-400' : ''
                            }`}
                    >
                        {problem.title}
                    </p>

                    <Badge title={problem.difficulty} />
                </div>
            </div>

            {/* Right side links */}
            <div className="flex gap-4 text-sm text-primary mt-1 sm:mt-0">
                {problem.leetcode && (
                    <a href={problem.leetcode} target="_blank">
                        LeetCode
                    </a>
                )}
                {problem.youtube && (
                    <a href={problem.youtube} target="_blank">
                        YouTube
                    </a>
                )}
                {problem.article && (
                    <a
                        href={problem.article}
                        target="_blank"
                        className="text-primary"
                    >
                        Article
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProblemRow;
