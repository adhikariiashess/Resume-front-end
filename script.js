//alter("Loading");




//Add Hobbies
function addNewHField(){
    

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter your hobbies");
    
    let hOb=document.getElementById("h");
    let hAddButtonOb=document.getElementById("hAddButton");

    hOb.insertBefore(newNode, hAddButtonOb);


}
//Add Languages
function addNewLField(){
    

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Language you know");
    
    let lOb=document.getElementById("l");
    let lAddButtonOb=document.getElementById("lAddButton");

    lOb.insertBefore(newNode, lAddButtonOb);


}

//Skills

function addNewSField(){
   

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter your skills");
    
    let sOb=document.getElementById("s");
    let sAddButtonOb=document.getElementById("sAddButton");

    sOb.insertBefore(newNode, sAddButtonOb);


}





//We
function addNewWEField(){
   

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter your work experiences");
    
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);


}

//aq
function addNewAQField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter your qualifications");
    
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

//Certificates

function addNewCField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cfield");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter your certifications");
    
    let cOb=document.getElementById("c");
    let cAddButtonOb=document.getElementById("cAddButton");

    cOb.insertBefore(newNode, cAddButtonOb);

}



//Generating CV

function generateCV()
{
   // console.log("generate CV");


    let Namefield=document.getElementById("Namefield").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=Namefield;

    //directt

    document.getElementById("nameT2").innerHTML= Namefield;

    //contact

    document.getElementById("contactT").innerHTML=document.getElementById("Contactfield").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("Addressfield").value;

    //hobbies
    let hos=document.getElementsByClassName("hfield");

    let str2=' ';

    for(let e of hos)
    {
        str2=str2+`<li> ${e.value}</li>`;
    }
    document.getElementById("HT").innerHTML=str2;

    //languages

    let los=document.getElementsByClassName("lfield");

    let str3=' ';

    for(let e of los)
    {
        str3=str3+`<li> ${e.value}</li>`;
    }
    document.getElementById("LT").innerHTML=str3;
    

    //social media links
    document.getElementById("fbT").innerHTML=document.getElementById("Facebookfield").value;

    document.getElementById("igT").innerHTML=document.getElementById("Instagramfield").value;

    document.getElementById("linT").innerHTML=document.getElementById("LinkedInfield").value;

    //objective

    document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;

    //skills

    let ss=document.getElementsByClassName("sfield");

    let str5=' ';

    for(let e of ss)
    {
        str5=str5+`<li> ${e.value}</li>`;
    }
    document.getElementById("ST").innerHTML=str5;

    //Work experience

    let wes=document.getElementsByClassName("wefield");

    let str=' ';

    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    //Academic Qualification

    let aqs=document.getElementsByClassName("eqfield");

    let str1='';

    for(let e of aqs)
    {
        str1=str1+`<li> ${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;


     //Certificates

     let ls=document.getElementsByClassName("cfield");

     let str4='';
 
     for(let e of ls)
     {
         str4=str4+`<li> ${e.value}</li>`;
     }
     document.getElementById("CT").innerHTML=str4;

     

    



    document.getElementById("cv-form").style.display="none";

    document.getElementById("cv-template").style.display="block";



}
