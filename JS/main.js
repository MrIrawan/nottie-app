import "./Utils/CustomComponents.js";
import notesData from "./data/notesData.js";
import { DateFormatter } from "./Utils/DateFormatter.js";
import { AddNotes, MakeNotesSchema } from "./Utils/NotesUtils.js";

const notesContainer = document.getElementById('notes-container');
const addNotesForm = document.getElementById('add-notes-form');

function renderBaseNotes(container) {
    notesData.forEach(note => {
        container.insertAdjacentHTML('beforeend', `
            <div class="card-list-notes" id="${note.id}">
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
        
    })
}

document.addEventListener('DOMContentLoaded', () => {
    pathNameMethod();
});
