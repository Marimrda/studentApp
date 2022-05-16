
const yargs = require('yargs')
const students = require('./students')
/* add commannd*/
yargs.command(
    {
    command:'add',
    describe:'addStudent',
    builder:{
        id:{
            describe:'this is the student unique ID',
            type:'number',
            demandOption:true
        },
        name:{
            describe:'this is the student name',
            type:'string',
            demandOption:true
        },
        comment:{
            describe:'this is comments for student',
            type:'string',
            demandOption:false
        },
        degrees:{
            describe:'this is the students degrees',
            type:'array',
            demandOption:true
        }
    },
    handler:()=>{
        students.addStudent(yargs.argv.id , yargs.argv.name , yargs.argv.comment , yargs.argv.degrees)
    }
})
/*end add command*/


/*delete command*/
yargs.command(
    {
    command:'delete',
    describe:'deleteStudent',
    builder:{
        id:{
            describe:'this is the student unique ID',
            type:'number',
            demandOption:true
        }   
    },
    handler:()=>{
        students.deleteStudent(yargs.argv.id)
    }
})
/*end delete command*/


/*read command*/
yargs.command({
    command:"read",
    describe:"read student info",
    builder:{
    id:{
        describe:'this is the student unique ID',
        type:'number',
        demandOption:true
    }},
    handler:()=>
        {
students.readStudent(yargs.argv.id)
        }
})
/*end read command*/

/*list command*/
yargs.command(
    {
        command:"list",
        describe:"list student",
        handler:()=>
        {
         students.listStudent()
        }
        }
    
)
/*end list command*/

yargs.parse()