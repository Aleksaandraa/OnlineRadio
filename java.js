const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const playlistItems = document.querySelectorAll('.playlist li');

playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        audioSource.src = item.getAttribute('data-src');
        audioPlayer.load();
        audioPlayer.play();
    });
});
