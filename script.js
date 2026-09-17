let code_editor = document.getElementById('code_editor');
let code_output = document.getElementById('code_output');

let local_directory;

fetch("local_directory.json")
    .then(response => response.json())
    .then(json => {
        local_directory = json;

        loadFile(local_directory);
    });


function loadFile(file) {
    for (let f in file) {
        console.log(f);
    }
}