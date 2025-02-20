import { SaveData } from "./StorageUtils.js";
import notesData from "../data/notesData.js";

function AddNotes(notesSchema) {
    notesData.push(notesSchema);
    SaveData(notesData);
}

function MakeNotesSchema(notesId, notesTitle, notesContent, notesCreateTime, notesAchieved = false) {
    return {
        id : notesId,
        title : notesTitle,
        body : notesContent,
        createdAt : notesCreateTime,
        achieved : notesAchieved
    }
}

export { AddNotes, MakeNotesSchema };