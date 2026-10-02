let playing = false;

function playSong(songName) {

    document.getElementById("currentSong").innerText = songName;

    const artist =
        document.getElementById("currentArtist");

    if (artist) {
        artist.innerText = "Swaram Music";
    }

    playing = true;

    const playButton =
        document.getElementById("mainPlay");

    if (playButton) {
        playButton.innerText = "Ⅱ";
    }

    alert("Now playing: " + songName);
}


function playFeatured() {

    playSong("Swaram Featured Mix");

}


function togglePlayer() {

    const button =
        document.getElementById("mainPlay");

    if (!button) {
        return;
    }

    if (playing) {

        playing = false;

        button.innerText = "▶";

    } else {

        playing = true;

        button.innerText = "Ⅱ";

    }

}


function filterLanguage(language) {

    window.location.href =
        "albums.html?language=" + language;

}


function showAll() {

    const cards =
        document.querySelectorAll(".filter-card");

    cards.forEach(card => {

        card.style.display = "block";

    });

}


function showLanguage(language) {

    const cards =
        document.querySelectorAll(".filter-card");

    cards.forEach(card => {

        if (card.dataset.language === language) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


function searchMusic() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".album-card");

    cards.forEach(card => {

        const title =
            card.dataset.title || card.innerText;

        if (title.toLowerCase().includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}
