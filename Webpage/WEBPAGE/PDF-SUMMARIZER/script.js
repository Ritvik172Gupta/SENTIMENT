    const fileInput = document.getElementById('file-upload');
    const fileChosen = document.getElementById('file-chosen');
    const uploadBox = document.getElementById('upload-box');
    const form = document.getElementById('upload-form');

    // Update filename on choosing file
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            fileChosen.textContent = fileInput.files[0].name;
        } else {
            fileChosen.textContent = 'No file chosen';
        }
    });

    // Drag and Drop Events
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.classList.add('dragover');
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.classList.remove('dragover');
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
            fileChosen.textContent = files[0].name;
        }
    });

    // Optional: Prevent default behavior on window dragover/drop
    window.addEventListener('dragover', e => e.preventDefault());
    window.addEventListener('drop', e => e.preventDefault());
