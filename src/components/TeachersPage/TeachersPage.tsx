//src/components/TeachersPage/TeachersPage.tsx

import { useEffect, useState } from "react";
import { getTeachers } from "../../services/teacher.ts";

import type { Teacher } from "../../types/teacher.ts";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const loadTeachers = async () => {
      const data = await getTeachers();
      setTeachers(data);
    };

    loadTeachers();
  }, []);

  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.name + teacher.surname}>
          <img src={teacher.avatar_url} alt={teacher.name} />
          <h3>
            {teacher.name} {teacher.surname}
          </h3>
          <p>{teacher.languages?.join(", ")}</p>
          <p>{teacher.price_per_hour}$/hour</p>
        </div>
      ))}
    </div>
  );
}
