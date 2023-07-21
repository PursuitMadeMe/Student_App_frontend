import React from 'react'
// - add SINGLE student data from StudentList Component in {JSON}
function StudentCard({student}) {

    // - bring student data from StudentList Component to StudentCard Component
    const {email, company, firstName, lastName, pic, grades, id, skill}= student

    // - bring GRADES numerical conversion from StudentList Component to StudentCard Component
    //convert ALL string grades to number grades
    const numericGrades = grades.map((grade) => Number(grade))

    //create var for grade total
    let total = 0

    //iterate through numeric grades
    for(let grade of numericGrades){
      //add each grade to the total
      total += grade
    }
    //create var average by dividing the total by number of numeric grades
    let average = total / numericGrades.length

    console.log(`<StudentCard Render! - Step 5 with each student ${firstName} ${lastName}`)
    return (
        <div key={id}>
        <img src={pic} alt={`${firstName}, ${lastName}`} />
        <h1>
          {firstName} {lastName}
        </h1>
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {average}%</li>


        </ul>
        </div>
      )
}

export default StudentCard