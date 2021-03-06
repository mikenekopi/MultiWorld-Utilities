window.addEventListener('load', () => {
    document.getElementById('upload-button').addEventListener('click', () => {
        document.getElementById('file-input').click();
    });

    document.getElementById('file-input').addEventListener('change', () => {
        document.getElementById('upload-form').submit();
    });

    $("#uploads-table").DataTable({
        "paging": false,
        "ordering": true,
        "order": [[ 3, "desc" ]],
        "info": false,
        "dom": "t",
    });
});
