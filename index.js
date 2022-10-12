// var element=document.createElement("div");
// element.innerHTML="this is div";
// element.style.backgroundColor="blue";
// document.body.append(element);

// var element=document.createElement("div");
// element.innerHTML="<span class=main>This is span</span";
// element.setAttribute("class","main");
// //element.classList.add("main1","main2","main3")
// document.body.append(element);


// var div=document.createElement("div")
// div.setAttribute("class","main");

// var span=document.createElement("span");
// span.setAttribute("class","main");
// span.innerHTML="this is span";
// div.append(span);
// document.body.append(div);



// var container=document.createElement("div");
// container.setAttribute("class","container");

// var row=document.createElement("div");
// row.setAttribute("class","row");

// var col=document.createElement("div");
// col.setAttribute("class","col");
// col.innerHTML="this is col";

// var col1=document.createElement("div");
// col1.setAttribute("class","col1");
// col1.innerHTML="this is col1";

// row.append(col,col1);
// container.append(row);
// document.body.append(container);


// var label=document.createElement("label");
// label.setAttribute("for","email");
// label.innerHTML="Mail";
// var br1=document.createElement("br");

// var input=document.createElement("input");
// input.setAttribute("type","email");

// input.setAttribute("id","email");
// var br2=document.createElement("br");
// var br3=document.createElement("br");



// var button=document.createElement("button");
// button.innerHTML="click Me";

// document.body.append(label,br1,input,br2,br3,button);




var label=createlabels("label","for","first","Firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","text","id","first");
var br2=createlinebreak("br");

var middle=createlabels("label","for","middle","Middlename");
var br3=createlinebreak("br");
var middlename=createinput("input","type","text","id","middle");
var br4=createlinebreak("br");

var last  =createlabels("label","for","last","Lastname");
var br5=createlinebreak("br");
var lastname=createinput("input","type","text","id","last");
var br6=createlinebreak("br");


var phone  =createlabels("label","for","phone","Phonenumber");
var br7=createlinebreak("br");
var phonenumber=createinput("input","type","number","id","phone");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,middle,br3,middlename,br4,last,br5,lastname,br6,phone,br7,phonenumber,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}



