import * as React from 'react';
import { Entity } from '../../types/types';

type CoursesListProps = {
  students: Array<Entity<Record<string, any>>>;
}

const CoursesList = ({ courses }: CoursesListProps) => {
  debugger
  return <ul className="student-list">{courses.map((c: any) =>
      (
        <div className="student">
          <li key={c.id}>{c.title}, {c.startDate}, {c.endDate}</li>
          <div>{c.description}</div>
        </div>
      ))}
    </ul>
}

export default CoursesList;