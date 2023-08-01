import React from 'react'
import './Error.css'

function Error({error}) {
    console.log(`<Error /> Rendered! Error = ${error}`)
  return (
    <div className='Error'>
    There was an Error :{error}
    <br/>
    Please Refresh the Page Or Contact Admin
    </div>
  )
}

export default Error