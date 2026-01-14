
export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface Segment {
  id: number;
  path: string;
  targetRGB: RGB;
  currentRGB: RGB;
  isCorrect: boolean;
  labelPosition: { x: number; y: number };
}

export type Difficulty = 'easy' | 'medium' | 'hard';
export type Screen = 'splash' | 'menu' | 'drawing' | 'quiz';
