const fs = require('fs')
const students = require('./students')
///////////////////////////////////////////////first function to ADD student//////////////////////////////////////////////////
const addStudent = (id,name,comment,degrees)=>
{
const students = loadStudent()
//////////////////////////////////////// to sure the the ID is unique //////////////////////////////////////////////////////////////////
const ununiqueId = students.filter((ele)=> 
{
    return ele.id===id;
})

console.log(ununiqueId)


if (ununiqueId.length===0)
{
    ////////////////////////////////////////function to sum degrees
   var sumDegree = 0 ;
   degrees.forEach((degree)=>
       {   
           sumDegree+=degree
          
        })
        console.log(`the sum of degrees for the student ${name} is = ${sumDegree}`)
       students.push({
           id,
           name,
           comment,
           degrees:sumDegree
        })
    saveStudent(students)
    console.log("student has been added")
}
else
{
console.log('Please Enter Unique Id')
}
}
////////////////////////END FUNCTION ADD ////////////////////

/////////////////////////////////////////////////////////////start function to delete student ////////////////////////
const deleteStudent = (id)=>
{
 const students = loadStudent()
 const keepStudent = students.filter((ele)=> 
{
    return ele.id!==id;
})

if (keepStudent.length===students.length)
{
  console.log('this id is not found')
}
else
{
    saveStudent(keepStudent)
    console.log("student has been deleted")
}

}
////////////////////////////////END FUNCTION DELETE ///////////////////////////////////

///////////////////////////////////////////////////////start function read //////////////////////////////////

const readStudent = (id) =>
{
    const students = loadStudent()
    const student = students.find ((std)=>
        {
return std.id===id
        })
        if(student)
        {
            console.log("read student info")
            console.log(student)
        }
        else
        {
            console.log("student is not exist")
        }

}
///////////////////////////////END FUNCTION READ//////////////////////////////////////

/////////////////////////////////////strat function list all students /////////////////

const listStudent=()=>
{
const students = loadStudent()
students.forEach((std )=> {
    console.log(`ID  ${std.id}`)
    console.log(`The Name Is ${std.name}`)
});
}
////////////////////////////////END FUNCTION LIST /////////////////////////////////////

//////////////////////////////////////////////////////////////////////
const loadStudent = ()=>
{
    try
    {
       const data = fs.readFileSync('students.json').toString()
       return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }
}
////////////////////////////////////////////////////////////////
const saveStudent = (students)=>
{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json' , saveData)
}
///////////////////////////////////////////////////////////////////////////////
module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
}

