


// to covert timeStamp into human readable form(5hours ago)
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


// to customeze data for highcharts
export function customizeChartData(data) {
    const result = [
        { name: 'tic-tac-toe', data: [] },
        { name: 'sudoku', data: [] },
        { name: 'chess', data: [] },
    
    ];

    data.forEach(item => {
        let name;
        switch (item.applicationId) {
            case '1':
                name = 'tic-tac-toe';
                break;
            case '2':
                name = 'sudoku';
                break;
            case '3':
                name = 'chess';
                break;
            default:
                name = 'Unknown';
        }

        const index = result.findIndex(obj => obj.name === name);

        if (index !== -1) {
            result[index].data.push(Number(item.memoryUtilization || item?.cpuUtilization));
        }
    });

    return result;
}

export function formatTime(timestamp) {
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    return formattedTime;
  }