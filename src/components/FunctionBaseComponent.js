import React from 'react'

function FunctionBaseComponent(props) {
  return (

        <div>

          <h2>user Details </h2>
          {props.users.map((i) => (
<div>
          <p>Name: {i.name}</p>
           <p>phone:  {i.phone}</p>
          <p>Address  {i.address}</p>
          <hr />
</div>
      ))}

    </div>
)

}

export default FunctionBaseComponent ;