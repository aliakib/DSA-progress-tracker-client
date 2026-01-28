export type Difficulty = 'Easy' | 'Medium' | 'Tough';

export interface Problem {
  slug: string;
  title: string;
  difficulty: Difficulty;
  youtube?: string;
  leetcode?: string;
  article?:string;
}

export interface Topic {
  _id: string;
  title: string;
  order: number;
  problems: Problem[];
}

export interface TopicsState {
  list: Topic[];
  loading: boolean;
  error: string | null;
}