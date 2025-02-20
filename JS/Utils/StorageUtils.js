function SaveData(data) {
    if (typeof Storage !== "undefined") {
        if (localStorage.getItem('NOTES_ITEM') !== null) {
            localStorage.setItem('NOTES_ITEM', JSON.stringify(data));
        } else {
            return [];
        }
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