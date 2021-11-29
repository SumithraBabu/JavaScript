let UserIdAutoIncrement=1000;
let CourseIdAutoIncrement=100;
let id;
let Name;
let day=0;
class UserDetails
{
    name:string;
    age:number;
    mobileNo:number;
    userId:number;
    constructor(name:string,age:number,mobileNo:number)
    {
        UserIdAutoIncrement++;
        this.name=name;
        this.age=age;
        this.mobileNo=mobileNo;
        this.userId=+UserIdAutoIncrement;
    }
}
class CourseDetails
{
    coursename:string;
    userId:number;
    name:string;
    courseId:string;
    day:number;
    constructor(coursename:string,userId:number,name:string,day:number)
    {
        CourseIdAutoIncrement++;
        this.coursename=coursename;
        this.userId=userId;
        this.name=name;
        this.courseId='CI-'+CourseIdAutoIncrement;
        this.day=day;
    }

}

let UserList:Array<UserDetails>=new Array<UserDetails>();
let CourseList:Array<CourseDetails>=[];
let value1=new UserDetails("sumi",20,12345);
let value2=new UserDetails("mithra",23,67890);
let value3=new UserDetails("gayathri",21,34567);

UserList.push(value1);
UserList.push(value2);
UserList.push(value3)

function Register()
{
    (document.getElementById("home") as HTMLElement).style.display="none";
    (document.getElementById("register") as HTMLElement).style.display="block";
}
function SignIn()
{
    (document.getElementById("home") as HTMLElement).style.display="none";
    (document.getElementById("enter") as HTMLElement).style.display="block";
}
function Next()
{
    let selectedcourse=(document.getElementById("selection") as HTMLInputElement).value;
    let day=parseInt((document.getElementById("day") as HTMLInputElement).value);
    let course=new CourseDetails(selectedcourse,id,Name,day)
    CourseList.push(course)
    alert("Enrolled");
    (document.getElementById("subject") as HTMLElement).style.display="none";
    (document.getElementById("option") as HTMLElement).style.display="block";
}
function course()
{
    (document.getElementById("option") as HTMLElement).style.display="none";
    (document.getElementById("subject") as HTMLElement).style.display="block";
}

function Back()
{
    (document.getElementById("final") as HTMLElement).style.display="none";
    (document.getElementById("home") as HTMLElement).style.display="block";
}
function Final()
{
    (document.getElementById("final") as HTMLElement).style.display="none";
    (document.getElementById("option") as HTMLElement).style.display="block";
}
function Home()
{
    (document.getElementById("option") as HTMLElement).style.display="none";
    (document.getElementById("home") as HTMLElement).style.display="block";
}
function Submit()
{
    let name=(document.getElementById("name") as HTMLInputElement).value;
    let age=parseInt((document.getElementById("age") as HTMLInputElement).value);
    let mobileNo=parseInt((document.getElementById("mobileno") as HTMLInputElement).value);
    let newuser=new UserDetails(name,age,mobileNo);
    UserList.push(newuser);
    alert("Registered");
    for(let i=0;i<UserList.length;i++)
    {
        if(UserList[i].mobileNo==mobileNo)
        {
            alert("Please Note Your User ID : "+UserList[i].userId);
        }
    }
   
    (document.getElementById("register") as HTMLElement).style.display="none";
    (document.getElementById("home") as HTMLElement).style.display="block";
}
function Check()
{
    let j=0;
    let id=parseInt((document.getElementById("userid") as HTMLInputElement).value);
    for(let i=0;i<UserList.length;i++)
    {
        if(id==UserList[i].userId)
        {
            id=UserList[i].userId;
            Name=UserList[i].name;
            j=1;
            alert("Hi :"+UserList[i].name);
            (document.getElementById("enter") as HTMLElement).style.display="none";
            (document.getElementById("option") as HTMLElement).style.display="block";
        }
    }
    if(j==0)
    {
        alert("UserID DoesnotExist");
    }

}
function Choice()
{
    let j=0;
    let day=0;
    (document.getElementById("option") as HTMLElement).style.display="none";
    (document.getElementById("final") as HTMLElement).style.display="block";
    document.getElementById("label").innerHTML ="";
    for(let i=0;i<CourseList.length;i++)
    {
        if(id==CourseList[i].userId)
        {
            j++;
            day+=CourseList[i].day
            document.getElementById("label").innerHTML +=` ${CourseList[i].courseId}| ${CourseList[i].coursename} `;  
            document.getElementById("days").innerHTML=`${day} is Required to Complete`;
        }
    }
    if(j==0)
    {
        document.getElementById("label").innerHTML ="No Courses Enrolled";
        document.getElementById("days").innerHTML ="";
        
    }
}

