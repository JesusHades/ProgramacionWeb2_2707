function obtenerContenidoCSV() {
    const tableBody = document.querySelector('#CsvTable tbody');
    let csvData = '';

    tableBody.querySelectorAll('tr').forEach(row => {
        Array.from(row.querySelectorAll('td')).forEach((td, index) => {
            csvData += td.textContent;
            if (index !== row.cells.length - 1) {
                csvData += ',';
            }
        });
        csvData += '\n';
    });

    return csvData;
}