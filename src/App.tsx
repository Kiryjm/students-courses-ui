import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)

  const [students, setStudents] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students-courses-api/students')
      .then((students: any) => setStudents(students.data))
      .catch((er: any) => setError(er.message));
  }, []);

  debugger
  return (
    <>
      <h1>
        Students
      </h1>
      {error ?
        <div className="error">{error}</div>
        : <ul className="student-list">{students.map((st: any) =>
          (
            <div className="student">
              <li key={st.id}>{st.name} {st.surname}, {st.email}</li>
            </div>
          ))}
        </ul>}
      {/*<div>*/}
      {/*<a href="https://vitejs.dev" target="_blank">*/}
      {/*  <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
      {/*</a>*/}
      {/*<a href="https://react.dev" target="_blank">*/}
      {/*  <img src={reactLogo} className="logo react" alt="React logo"/>*/}
      {/*</a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
    </>
  );
}

export default App;
