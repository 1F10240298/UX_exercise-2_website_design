const url = "https://marinesnow.sakura.ne.jp/2024/WebD/table.php";
const tableBody = document.getElementById("studentTableBody");

fetch(url)
.then(response => response.json())

.then((scores) => {
    for (const studentId in scores) {
        if (scores.hasOwnProperty(studentId)) {
            const studentData = scores[studentId];
            
            const newRow = tableBody.insertRow();
            
            let cell = newRow.insertCell();
            cell.textContent = studentId;
            
            cell = newRow.insertCell();

            cell.textContent = studentData.age || 'N/A';
            
            cell = newRow.insertCell();

            cell.textContent = studentData.hobby || 'N/A';
        }
    }
})
