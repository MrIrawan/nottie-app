function DateFormatter(stringDate) {
    const date = new Date(stringDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

export { DateFormatter };