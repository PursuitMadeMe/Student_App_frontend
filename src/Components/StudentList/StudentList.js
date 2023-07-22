import React from 'react'
//import StudentCard Component
import StudentCard from '../StudentCard/StudentCard'
//import StudentList css
import './StudentList.css'

// - add fetched Student data to StudentList Component in {JSON}
function StudentList({studentData}) {

    //Test if Component DOM has changed - DEBUG in Inspect
    console.log('<StudentList /> Render! - STEP 2')
    //iterate through ALL the Student data and RETURN ONE student to the StudentCard Component
  return (
    <div className='StudentList'>
    
      {studentData.map((student) => <StudentCard key={student.id} student={student}/>)}
      </div>
 
  )
}
export default StudentList