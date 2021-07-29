const searchArtwork = (e) => {
    e.preventDefault();

    const queryItem = document.querySelector('#search-box').value;

    if(queryItem) {

        window.location.href = `/all-artwork?filter=${queryItem}`
    }
    
}

document.querySelector('#search-artist').addEventListener('click', searchArtwork);