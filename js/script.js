// Consegna

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.


// Creo l'array contenente le informazioni dei membri del team
const teamMembers = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        job: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        job: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        job: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        job: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        job: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },
];

// Stampo su console
console.log(teamMembers);

// Stampo le informazioni su DOM con delle card
const cardRow = document.querySelector(".row")

let cards = ""
for (let i = 0; i < teamMembers.length; i++){

    const currentMember = teamMembers[i];
    cards += `
    <div class="col-4">
        <div class="card card${i} mb-5 bg-white">
            <div class="card-body d-flex flex-column justify-content-center">
                <img src="${currentMember.image}" alt="">
                <h5 class="card-title mt-3">${currentMember.name}</h5>
                <h6 class="card-subtitle">${currentMember.job}</h6>
            </div>
        </div>
    </div>
    `
}

cardRow.innerHTML = cards;