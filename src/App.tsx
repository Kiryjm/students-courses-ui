import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';
import * as React from 'react';
import Table from './components/common/Table';
import { Course, Student } from './types/types';
import EntitiesList from './components/StudentsList/index';
import CoursesList from './components/CoursesList/index';

// const students = [
//   {
//     "name": "Vasiliy",
//     "surname": "Konov",
//     "email": "vaskon@gmail.com",
//     "courses": null,
//     "id": "36e65205-e66b-45bf-8041-4b87d6dbd888"
//   },
//   {
//     "name": "Andrey",
//     "surname": "Ivanov",
//     "email": "aniv@gmail.com",
//     "courses": null,
//     "id": "3e98d987-2f30-4fa4-b072-a6759f78e0d8"
//   },
//   {
//     "name": "Mikhail",
//     "surname": "Tall",
//     "email": "mih@gmail.com",
//     "courses": null,
//     "id": "a9949520-3e25-47aa-a31d-ea21524eede2"
//   }
// ]

type StudentsCardProps = {
  students: Array<Student>;
}

function App() {
  // const [count, setCount] = useState(0)

  const [students, setStudents] = useState<Array<Student>>([]);
  const [courses, setCourses] = useState<Array<Course>>([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/students-courses-api/students')
      .then((students: any) => setStudents(students.data))
      .catch((er: any) => {
        debugger
        setError(er.message);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/students-courses-api/courses')
      .then((courses: any) => setCourses(courses.data))
      .catch((er: any) => {
        debugger
        setError(er.message);
      });
  }, []);

  debugger
  return (
    <>
      <Table
        title={"Students"}
        dataComponent={<EntitiesList students={students} />}
      />
      <Table
        title={"Students"}
        dataComponent={<CoursesList courses={courses} />}
      />
    </>
  );
}

export default App;
