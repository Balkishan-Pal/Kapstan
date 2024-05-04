

export function converTimeToHumanReadableForm(timestamp) {
    const now = Date.now();
    const secondsPast = (now - timestamp) / 1000;

    if (secondsPast < 60) {
        return `${Math.floor(secondsPast)} seconds ago`;
    } else if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)} minutes ago`;
    } else if (secondsPast < 86400) {
        return `${Math.floor(secondsPast / 3600)} hours ago`;
    } else if (secondsPast < 2592000) {
        return `${Math.floor(secondsPast / 86400)} days ago`;
    } else {
        const date = new Date(timestamp);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
}


