const addbutton = document.querySelector('#add');


const updateLSData = () => {
    const textareadata = document.querySelectorAll('textarea');
    const notes = [];


    textareadata.forEach((note) => {
        return notes.push(note.value);


    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addnote = (text = '') => {

    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    
    <div class="operation">
<button class="edit" ><i class="fas fa-edit"></i></button>
<button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? " " : "hidden"}"></div> 
<textarea class="${text ? "hidden" : " "}" name="" id="" ></textarea>
 `;

    console.log(note.insertAdjacentHTML('afterbegin', htmlData));
    console.log(note);


    //gettting the refrences
    const editbtn = note.querySelector('.edit');
    const delbtn = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');



    //deleting the node 
    delbtn.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })


    //toggle using edit icon 

    textarea.value = text;
    maindiv.innerHTML = text;

    editbtn.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })


    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        maindiv.innerHTML = value;




        updateLSData();
    })
    document.body.appendChild(note);
}

// getting data back from storage 
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => addnote(note))
};

addbutton.addEventListener('click', () => {
    addnote()
});