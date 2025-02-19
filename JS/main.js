import "./Utils/CustomComponents.js";
import notesData from "./data/notesData.js";

const notesContainer = document.getElementById('notes-container');

function renderBaseNotes(container) {
    notesData.forEach(note => {
        container.insertAdjacentHTML('beforeend', `
            <div class="card-list-notes" id="${note.id}">
                <div class="card-header">
                    <h3>${note.title}</h3>
                    <p>2 hari yang lalu</p>
                </div>
                <hr>
                <div class="card-content">
                    <p>${note.body}</p>
                </div>
            </div>
        `);
    });
}
