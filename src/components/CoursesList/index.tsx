import { Entity } from '../../types/types';

type CoursesListProps = {
  courses: Array<Entity>;
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