document.addEventListener("DOMContentLoaded", function() {
    const dlcSelect = document.getElementById("dlc-select");

    // Fetch the DLC data
    fetch('dlc/index.js')
        .then(response => response.json())
        .then(data => {
            // Populate the dropdown list with DLC options
            data.forEach(dlc => {
                const option = document.createElement("option");
                option.value = dlc.file;
                option.textContent = dlc.title;
                dlcSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching DLC data:', error));
});
