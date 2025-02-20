function AddNotes(notesSchema, dataNotes) {
    return dataNotes.push(notesSchema);
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