// src/types/teacher.ts

export type Teacher = {
  name: string;
  surname: string;
  avatar_url: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: any[];
  price_per_hour: number;
  lessons_done: number;
  lesson_info: string;
  conditions: string[];
  experience: string;
};
