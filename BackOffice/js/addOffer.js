function validerFormulaire() {
    const title = document.getElementById('title').value;
    const destination = document.getElementById('destination').value;
    const departure_date = new Date(document.getElementById('departure_date').value);   
    const return_date = new Date(document.getElementById('return_date').value);
    const price = document.getElementById('price').value;
  
    let formulaireValide = true;
  
    if (title.length < 3) {
      alert('Le titre doit contenir au moins 3 caractères.');
      formulaireValide = false;
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(destination) || destination.length < 3) {
      alert('La destination doit contenir uniquement des lettres et des espaces, et au moins 3 caractères.');
      formulaireValide = false;
      return;
    }
  
    if (isNaN(departure_date) || isNaN(return_date) || return_date <= departure_date) {
      alert('La date de retour doit être ultérieure à la date de départ.');
      formulaireValide = false;
      return;
    }
  
    if (isNaN(price) || price <= 0) {
      alert('Le prix doit être un nombre positif.');
      formulaireValide = false;
      return;
    }
    else 
    {alert('formulaire enregistrée avec succées.');
    }
    return formulaireValide;
  }
 
document.addEventListener("DOMContentLoaded",function(){

var titleElement=document.getElementById("title");
var destinationElement=document.getElementById("destination");

titleElement.addEventListener("keyup",function(){
    var titleValue=titleElement.value;
    var titleError=document.getElementById("title_error");

    if(titleValue.length<3){
        titleError.innerHTML="Le titre doit contenir au moins 3 caractères";
        titleError.style.color="red";
    }
    else {
        titleError.innerHTML="Correct";
        titleError.style.color="green";
    }

    destinationElement.addEventListener("keyup",function(){
        var destinationValue=destinationElement.value;
        var destinationError=document.getElementById("destination_error");
        var pattern= /^[A-Za-z\s]{3,}$/;

        if(!pattern.test(destinationValue)){
            destinationError.innerHTML="La destination doit contenir uniquement des lettre et des espaces";
            destinationError.style.color="red";
        }
        else {
            destinationError.innerHTML="Correct";
            destinationError.style.color="green";
        }
        })
    })

})