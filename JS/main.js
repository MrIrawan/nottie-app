import "./Utils/CustomComponents.js";
import notesData from "./data/notesData.js";
import { SaveData, GetData } from "./Utils/StorageUtils.js";
import { DateFormatter } from "./Utils/DateFormatter.js";
import { MakeNotesSchema } from "./Utils/NotesUtils.js";

const notesContainer = document.getElementById('notes-container');
const addNotesForm = document.getElementById('add-notes-form');
const addedNotes = [...notesData];


function pathNameMethod() {
    const pathName = ['/index.html', '/addNotes.html', '/listNotes.html'];
    const currentPath = window.location.pathname;

    if (currentPath === pathName[1]) {
        hanldeMakeSchema();
    } else if (currentPath === pathName[2]) {
        renderBaseNotes(notesContainer);
    } else {
        console.log('selamat datang di Nottie.');
        
    }
}

function hanldeMakeSchema() {
    const titleNotes = addNotesForm.elements[0];
    const contentNotes = addNotesForm.elements[1];

    addNotesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const notesSchema = MakeNotesSchema(Date.now(), titleNotes.value, contentNotes.value, new Date());

        if (titleNotes.value == '' || contentNotes.value == '') {
            alert('Judul dan isi catatan tidak boleh kosong.');
            titleNotes.value = '';
            contentNotes.value = '';
        } else {
            alert('Catatan berhasil ditambahkan.');
            addedNotes.push(notesSchema);
            console.log(addedNotes);
            SaveData(addedNotes);
            
            
            addNotesForm.reset();
        }
    })
}

function renderBaseNotes(container) {
    const notes = GetData();
    notes.forEach(note => {
        container.insertAdjacentHTML('beforeend', `
            <div class="card-list-notes">
                <div class="card-header">
                    <h3>${note.title}</h3>
                    <p>${DateFormatter(note.createdAt)}</p>
                </div>
                <hr>
                <div class="card-content">
                    <p>${note.body}</p>
                </div>
            </div>
        `);
    });    
}

document.addEventListener('DOMContentLoaded', () => {
    pathNameMethod();
});
