function display() {
    //travel the salon.pet
    document.getElementById('pets').innerHTML = "";
    for (var i = 0; i < salon.pets.length; i++) {
        //create temporal string (tmp)
        var aPet = salon.pets[i];

        if (aPet.service === "full") {
            aPet.price = 30;
        } else if (aPet.service === "shower") {
            aPet.price = 25;
        } else if (aPet.service === "nails") {
            aPet.price = 15;
        } else if (aPet.service === "hair") {
            aPet.price = 50;
        }  else if (aPet.service === "pads") {
            aPet.price = 20;
        }
        //document.write(salon.pets[i].name);
        //append the tmp into the html
        
        var tmp = `
        <div id="${aPet.id}" class="pet" >
            <h3> ${aPet.name} </h3>
            <p> ${aPet.age} </p>
            <p> ${aPet.gender} </p>
            <p> ${aPet.breed} </p>
            <p> ${aPet.service} </p>
            <p> $${aPet.price}.00 </p>
            <p> ${aPet.ownerName} </p>
            <p> ${aPet.contactPhone} </p>
            <p>  ${aPet.type} </p>
            <button onclick="deletePet(${aPet.id})" class="btn btn-danger"> Delete </button> 
            
        </div>`;
        console.log(tmp);
        document.getElementById('pets').innerHTML += tmp;
    }
    //append the tmp into the html
    updateProfits();
}
function displayTable(aPet){
    if (aPet.service === "full") {
        aPet.price = 30;
    } else if (aPet.service === "shower") {
        aPet.price = 25;
    } else if (aPet.service === "nails") {
        aPet.price = 15;
    } else if (aPet.service === "hair") {
        aPet.price = 50;
    }  else if (aPet.service === "pads") {
        aPet.price = 20;
    }
    var icon="";
    if (aPet.type === "dog") {
        icon="🐕";
    } else if (aPet.type === "cat") {
        icon="🐈";
    } else if (aPet.type === "bird") {
        icon="🐦";
    } else{
        icon="🐾";
    }

    //crate the row

    var row=document.createElement('tr');row.innerHTML=`
        
            <td>${aPet.name}</td>
            <td>${aPet.age}</td>
            <td>${aPet.gender}</td>
            <td>${aPet.breed}</td>
            <td>${aPet.service}</td>
            <td>${aPet.ownerName}</td>
            <td>${aPet.contactPhone}</td>
            <td>$${aPet.price}.00</td>
            <td>${icon}</td>
        `
    //append the row to a table
    document.querySelector('#petTable').appendChild(row);
    updateProfits();
}
//var count = $('#petType dog').length;
//console.log(count);

function get_count() {
    var counter = 0;
    $("dog").each(function() {
      if ($(this).val() == "dog") {
        counter++;
      }
    });
    return counter;
    
  }
  
  $("#show").click(function() {
    alert(get_count());
    
  });
  console.log(counter);