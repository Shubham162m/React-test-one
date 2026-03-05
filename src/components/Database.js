import React from 'react'

import React from 'react'
import 'FunctionBaseComponent'

function UserData() {
        let students = [
                {name : "Shubham" ,Age : 22 , Enr_no : 24162582010} ,
                {name : "Aryan" ,Age : 23 , Enr_no : 24162582016}
        ];

        let Employees =
        [
                {name:"Alice" , Age : 30 ,Location : "Gujarat ,Palanpur"},
                {name:"Bob " , Age : 25 ,Location : "Gujarat ,Ahmedabad"}
        ]
        
  return (
    <div>
         <Fun std = {students}/>
         <Employee Emp = {Employees}/>
    </div>
  )
}

export default UserData ;