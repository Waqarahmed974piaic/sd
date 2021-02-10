var mainList=document.getElementById("mainList")
var id=document.getElementById("Id")
var studentNamee=document.getElementById("Name")
var fatherNamee=document.getElementById("FatherName")
var classNamee=document.getElementById("Class")
var number=document.getElementById("Number")

function Submit(){
    var inputId=id.value
    var inputName=studentNamee.value
    var inputFatherName=fatherNamee.value
    var inputClassName=classNamee.value
    var inputNumber=number.value
    //=====================
    var studentId = document.createTextNode("Student ID: "+inputId)
    var studentName=document.createTextNode("Student Name: "+inputName)
    var fatherName=document.createTextNode("Father Name: "+inputFatherName)
    var className=document.createTextNode("Class Name: "+inputClassName)
    var emergencyNumber=document.createTextNode("Emergency Number: "+inputNumber)
    var li = document.createElement('li')
    li.setAttribute('class', 'List')
    console.log(li)
    //======================
    var cardDiv=document.createElement('div')
    //==ul==
    var ull=document.createElement('ul')
    var li1=document.createElement('li')
    var li2=document.createElement('li')
    var li3=document.createElement('li')
    var li4=document.createElement('li')
    var li5=document.createElement('li')
    li1.appendChild(studentId)
    li2.appendChild(studentName)
    li3.appendChild(fatherName)
    li4.appendChild(className)
    li5.appendChild(emergencyNumber)
    ull.appendChild(li1)
    ull.appendChild(li2)
    ull.appendChild(li3)
    ull.appendChild(li4)
    ull.appendChild(li5)
    cardDiv.setAttribute('class','div1')
    cardDiv.appendChild(ull)
    // cardDiv.appendChild(studentName)
    // cardDiv.appendChild(fatherName)
    // cardDiv.appendChild(className)
    // cardDiv.appendChild(emergencyNumber)
    li.appendChild(cardDiv)
    mainList.setAttribute('class','mainList')
    mainList.appendChild(li)
}

