const salon = {
    name: "the fancy pet",
    number:"555-555-5555",
    hours: {
        open: "9:00 am",
        close: "5:00 pm"
    },
    copyright:"christen codina 2022",
    pets: [

    ]
    
}


//var salonName=salon.name;
//var salonNumber=salon.address.number;
var { name, number ,hours:{ open, close}, copyright } = salon;// object destructuring

document.getElementById('footer-info').innerHTML = `
    <p> ${name} </p>
    <p> ${number}</p>
    <p> ${open} ${close} </p>
    <p><span class="copyright">&copy</span> ${copyright}</p>
`;

function displayText() {
    for (var i = 0; i < salon.pets.length; i++) {
        console.log(salon.pets[i].petName);
    }
}

var counter=0; 
// create the object
class Pet {
    constructor(name, age, gender, breed, service, ownerName, contactPhone, type) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.type = type;
        this.price = 0;
        this.id=counter++;
        
    }
}


//create the register function
var inputName = $('#petName');
var inputAge = $('#petAge');
var inputGender = $('#petGender');
var inputBreed = $('#petBreed');
var inputService = $('#petService');
var inputOwner = $('#ownerName');
var inputPhone = $('#ownerPhone');
var inputType = $('#petType');


function register() {

    var thePet = new Pet(
        $('#petName').val(),
        $('#petAge').val(),
        $('#petGender').val(),
        $('#petBreed').val(),
        $('#petService').val(),
        $('#ownerName').val(),
        $('#ownerPhone').val(),
        $('#petType').val()
        );

    console.log(thePet);
    // create a generic object and pass the info of the vars 
    salon.pets.push(thePet);
    //push the object into the array

    //clear the inputs 
    clear();
    //displayTable(thePet);
    display();
}

function clear() {
    inputName.val("");
    inputAge.val("");
    inputBreed.val("");
    inputType.val("");
    inputService.val("");
    inputGender.val("");
    inputOwner.val("");
    inputPhone.val("");
    
}

function updateProfits() {
    var profit = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        profit = profit + salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML = `Profits = $${profit}.00`;
}

function deletePet(petId){
    //select the card with the pet
    var card=$('#'+petId);
    console.log('delete pet'+petId);
    //searchthe pet in the array
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
            break;
        }
        console.log(i);
    }
    //delete the pet from the array
    salon.pets.splice(indexDelete,1);
    //delete the pet from the html
    card.remove();
    updateProfits();
}

function searchPet(){
    // add the search input, and search button
    //get the value from the input
    var ss=$('#searchPet').val();
    //search the pet on the array
    salon.pets.forEach(aPet=>{
        if(aPet.name.toLowerCase().includes(ss.toLowerCase())||
            aPet.service.toLowerCase().includes(ss.toLowerCase())
        ){
            $('#'+aPet.id).removeClass('unactive');
        }else{
            $('#'+aPet.id).addClass('unactive');
        }
    });  
    //change the cssto display the result 
}

var pet1 = new Pet("scooby", 50, "Male", "Dane", "hair", "shaggy", "555-5555","dog");
var pet2 = new Pet("scrappy", 40, "Male", "Mixed", "full", "shaggy", "555-5555","bird");
var pet3 = new Pet("nena", 30, "Female", "Mut",  "nails", "ryan", "555-5555","other");

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

function init() {
    console.log("Executed");
    //create pets

    //displayTable(pet1);
    //displayTable(pet2);
    //displayTable(pet3);
    display();

    //hook events
    $('#register-btn').click(register);
    $('#search-btn').on('click',searchPet);
    $('#ownerPhone').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            register();
        }
    });
    $('#searchPet').on('keyup',searchPet);
}

