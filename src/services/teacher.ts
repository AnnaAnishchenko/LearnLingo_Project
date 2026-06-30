//services/teachers.ts

import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase.ts";
import type { Teacher } from "../types/teacher.ts";

export const getTeachers = async (): Promise<Teacher[]> => {
  const snapshot = await get(ref(db));

  console.log("exists:", snapshot.exists());
  console.log("val:", snapshot.val());
  console.log("teachers:", Object.values(snapshot.val() || {}));

  if (!snapshot.exists()) return [];

  return Object.values(snapshot.val()) as Teacher[];
};
