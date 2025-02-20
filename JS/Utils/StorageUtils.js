function SaveData(notesData) {
    if (typeof Storage !== "undefined") {
        localStorage.setItem('NOTES_ITEM', JSON.stringify(notesData));
    }
}

function GetData() {
    if (typeof Storage !== "undefined") {
        if (localStorage.getItem('NOTES_ITEM') !== null) {
            return JSON.parse(localStorage.getItem('NOTES_ITEM'));
        } else {
            return [];
        }
    } else {
        console.log('Your browser does not support local storage.');
    }
}

export { SaveData, GetData };