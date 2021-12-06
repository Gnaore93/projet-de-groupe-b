bouton.onclick=(e)=>{
  e.preventDefault();
  let donnes = JSON.parse(localStorage.getItem("donnes")) ||  [];
  donnes.push({

    matricule:matr.value,
    date:dat.value,
    nom:nm.value,
    libelles:libel.value,
    montant:mtn.value,
    versement:versmt.value,
    reste_a_payer:rap.value, 
  })

  localStorage.setItem("donnes",JSON.stringify(donnes));
  document.querySelector('tbody').innerHTML="";
  for( person in donnes){
    document.querySelector('tbody').innerHTML+=`<td>${donnes[person].matricule}</td><td>${donnes[person].date}</td><td>
    ${donnes[person].nom}</td><td>${donnes[person].libelles}</td><td>
    ${donnes[person].montant}</td><td>${donnes[person].versement}</td><td>${donnes[person].reste_a_payer}</td>`;
  }

  const personn = JSON.parse(localStorage.getItem("donnes"))
  const search = document.getElementById('search');
  search.addEventListener('keyup', 
    function(){
const input = search.value;
const result = personn.filter(item=> item.name.includes(input));
  console.log(result);

  })

} 


