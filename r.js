// Prototype's

function person(first,last,age,gender,hight){
    person.firstName = first;
    person.lastName = last;
    person.age = age;
    person.gender = gender;
    person.hight = hight;
}

person.nationality = "Indian";

const Person = ("Mitesh","Suthar",10,"Male",5.6);

document.getElementById("demo").innerHTML = "The Person Is"+person.hight;