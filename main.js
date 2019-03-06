`const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
    };`


const dinosaurs = [
    {
        dinoType: 't-rex',
    },
    {
        dinoType: 'stegosaurus',
    },
    {
        dinoType: 'velociraptor',
    }
];

// loop over the dinosaurs
//build up a DOMstring
//pring domstring to the dom 

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildDinosaurs= () => {
    let domString = '';
    for(let i=0; i < dinosaurs.length; i++){  
        domString += `<h3> ${dinosaurs[i].dinoType}</h3>`;
        console.log(dinosaurs[i].dinoType);
    }
    printToDom('dino-barn',domString);
};

const initializer = () => {
    buildDinosaurs();
};

initializer();