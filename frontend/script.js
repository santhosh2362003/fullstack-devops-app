function loadData() {
    fetch('/api')
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerText = data.message;
        });
}
