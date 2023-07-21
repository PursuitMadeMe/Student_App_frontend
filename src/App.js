import { useEffect , useState} from "react";
import "./App.css";
import StudentList from "./Components/StudentList/StudentList";

// TODO: create a var to fetch data from URL value from .env - BACKEND
const API_URL = "http://localhost:8888";

function App() {
  // useState : Dynamic data
  const [studentData, setStudentData] = useState([])

  // useEffect : LOADS Component One time - unless Dependancy array changes, then will RELOAD Component
useEffect(() => {

  console.log('<App /> useEffect Fired! - STEP 3')

  //async REQUEST to fetch data 
  async function fetchData() {
    //RESPOND w/ data from localhost:8888/students - BACKEND
    const response = await fetch(`${API_URL}/students`)
    //TRANSLATE data to JSON 
    const json = await response.json()
    //DISPLAY data
    console.log('<App /> useEffect() fetch data - STEP 4', json)

    // useState Changed - NEW data (fetched) to ReRender
    const {data} = json 
    setStudentData(data)
  }
  fetchData()
},[])

  //Component DEBUG in Inspect - Component ReRenders with DOM
  // - add useState to StudentList Component as a prop
  console.log(`<App /> Renders! - STEP 1 with number of students ${studentData.length}`);
  return (
    <div className="App">
      <StudentList studentData={studentData}/>
    </div>
  );
}

export default App;
