import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Loading from "./Components/Loading /Loading";
import Error from "./Components/Error/Error";
import StudentList from "./Components/StudentList/StudentList";


// TODO: create a var to fetch data from URL value from .env - BACKEND
const API_URL = "http://localhost:8888";

function App() {
  // useState : Dynamic data for list of Students
  const [studentData, setStudentData] = useState([]);

  //useState : Dynamic LOADING of data
  const [loading, setLoading] = useState(true);

  //useState : Dynamic ERROR message if data DOESN'T Load
  const [error, setError] = useState("");

  // useEffect : LOADS Component One time - unless Dependancy array changes, then will RELOAD Component
  useEffect(() => {
    console.log("<App /> useEffect Fired! - STEP 3");

    //async REQUEST to fetch data
    async function fetchData() {
      try {
        //Remove any error from previous attempts
        setError("");
        //Show the user data is LOADING
        setLoading(true);

        //RESPOND w/ data from localhost:8888/students - BACKEND
        const response = await fetch(`${API_URL}/students`);
        //TRANSLATE data to JSON
        const json = await response.json();
        //DISPLAY data
        console.log("<App /> useEffect() fetch data - STEP 4", json);

        // useState Changed - NEW data (fetched) to ReRender OR Error on the Backend
        const { data, error } = json;
        // setStudentData(data)

        //Stop loading and Show NEW data
        setLoading(false);

        //if API fetch data status is ok => return setStudentdata - else => return setError and setLoading is false
        if (response.ok) {
          setStudentData(data);
        } else {
          setError(error);
          setLoading(false);
        }

        //ERROR Handling if Data doesn't LOAD - setLoading useState => fale (no data loading) - setError useState => error message provided
      } catch (err) {
        console.log(`<App /> useEffect error: ${err.message}`);
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  //renderContent Funtion - if data is loading => return the Loading Component - else if Error => return Error Component - else => return StudentList Component with Student data
  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <StudentList studentData={studentData} />;
    }
  };

  console.log(
    `<App /> Renders! - STEP 1 Error = ${error} Loading = ${loading} with number of students ${studentData.length}`
  );
  return <div className="App">

  {/** Container COMPONENT is a style Layout in BOOTSTRAP for renderContent() of LOADING - ERROR - STUDENTLIST (same styling for ALL Components) */}

  {/** Add a CENTER prop to Container Component w Boolean - if Component Render is Error OR Loading => style the items CENTER */}
  <Container center={Boolean(error || loading)}>{renderContent()}</Container>
  {/* {renderContent()} */}
  </div>;
}

export default App;
