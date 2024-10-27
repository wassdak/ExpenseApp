export function getFormattedDate(date) {
    if (!date || isNaN(new Date(date))) {
        return ''; // Return empty string or handle error case
    }
    return new Date(date).toISOString().slice(0, 10); // Ensure 'date' is a Date object
}

export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}