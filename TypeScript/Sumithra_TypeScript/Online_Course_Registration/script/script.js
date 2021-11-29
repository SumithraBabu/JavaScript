var UserIdAutoIncrement = 1000;
var CourseIdAutoIncrement = 100;
var id;
var Name;
var day = 0;
var UserDetails = /** @class */ (function () {
    function UserDetails(name, age, mobileNo) {
        UserIdAutoIncrement++;
        this.name = name;
        this.age = age;
        this.mobileNo = mobileNo;
        this.userId = +UserIdAutoIncrement;
    }
    return UserDetails;
}());
var CourseDetails = /** @class */ (function () {
    function CourseDetails(coursename, userId, name, day) {
        CourseIdAutoIncrement++;
        this.coursename = coursename;
        this.userId = userId;
        this.name = name;
        this.courseId = 'CI-' + CourseIdAutoIncrement;
        this.day = day;
    }
    return CourseDetails;
}());
var UserList = new Array();
var CourseList = [];
var value1 = new UserDetails("sumi", 20, 12345);
var value2 = new UserDetails("mithra", 23, 67890);
var value3 = new UserDetails("gayathri", 21, 34567);
UserList.push(value1);
UserList.push(value2);
UserList.push(value3);
function Register() {
    document.getElementById("home").style.display = "none";
    document.getElementById("register").style.display = "block";
}
function SignIn() {
    document.getElementById("home").style.display = "none";
    document.getElementById("enter").style.display = "block";
}
function Next() {
    var selectedcourse = document.getElementById("selection").value;
    var day = parseInt(document.getElementById("day").value);
    var course = new CourseDetails(selectedcourse, id, Name, day);
    CourseList.push(course);
    alert("Enrolled");
    document.getElementById("subject").style.display = "none";
    document.getElementById("option").style.display = "block";
}
function course() {
    document.getElementById("option").style.display = "none";
    document.getElementById("subject").style.display = "block";
}
function Back() {
    document.getElementById("final").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function Final() {
    document.getElementById("final").style.display = "none";
    document.getElementById("option").style.display = "block";
}
function Home() {
    document.getElementById("option").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function Submit() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var mobileNo = parseInt(document.getElementById("mobileno").value);
    var newuser = new UserDetails(name, age, mobileNo);
    UserList.push(newuser);
    alert("Registered");
    for (var i = 0; i < UserList.length; i++) {
        if (UserList[i].mobileNo == mobileNo) {
            alert("Please Note Your User ID : " + UserList[i].userId);
        }
    }
    document.getElementById("register").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function Check() {
    var j = 0;
    var id = parseInt(document.getElementById("userid").value);
    for (var i = 0; i < UserList.length; i++) {
        if (id == UserList[i].userId) {
            id = UserList[i].userId;
            Name = UserList[i].name;
            j = 1;
            alert("Hi :" + UserList[i].name);
            document.getElementById("enter").style.display = "none";
            document.getElementById("option").style.display = "block";
        }
    }
    if (j == 0) {
        alert("UserID DoesnotExist");
    }
}
function Choice() {
    var j = 0;
    var day = 0;
    document.getElementById("option").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("label").innerHTML = "";
    for (var i = 0; i < CourseList.length; i++) {
        if (id == CourseList[i].userId) {
            j++;
            day += CourseList[i].day;
            document.getElementById("label").innerHTML += " ".concat(CourseList[i].courseId, "| ").concat(CourseList[i].coursename, " ");
            document.getElementById("days").innerHTML = "".concat(day, " is Required to Complete");
        }
    }
    if (j == 0) {
        document.getElementById("label").innerHTML = "No Courses Enrolled";
        document.getElementById("days").innerHTML = "";
    }
}
