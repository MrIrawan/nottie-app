import "./Utils/CustomComponents.js";
import notesData from "./data/notesData.js";
import { DateFormatter } from "./Utils/DateFormatter.js";

const notesContainer = document.getElementById('notes-container');

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

document.addEventListener('DOMContentLoaded', () => {
    renderBaseNotes(notesContainer);
});
