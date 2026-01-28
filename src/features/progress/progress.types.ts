export type ProgressMap = Record<string, boolean>;

export interface ToggleProgressResponse {
  problemSlug: string;
  completed: boolean;
}

export interface ProgressState {
  map: ProgressMap;
  loading: boolean;
}