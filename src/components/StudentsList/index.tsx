import * as React from 'react';
import { Entity } from '../../types/types';

type StudentsListProps = {
  students: Array<Entity<Record<string, any>>>;
}

const StudentsList = ({ students }: StudentsListProps) => {
  debugger
  return <ul className="student-list">{students.map((st: any) =>
      (
        <div className="student">
          <li key={st.id}>{st.name} {st.surname}, {st.email}</li>
        </div>
      ))}
    </ul>
}

export default StudentsList;