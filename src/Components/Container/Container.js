import React from 'react'
import './Container.css'

// center - props for all Components style CENTER items
// children - props are all the Components that will have the same styling from the Container Component
function Container({center, children}) {

  //create var for conditionlal ClassName styling options
  let classNames = ['Container']

  //if item is center => return the className Container--center
    if(center){
      classNames.push('Container--center')
    }
    console.log('<Container/> Renders!')
  return (
    <div className={classNames.join(' ')}>
    {children}
    </div>
  )
}

export default Container