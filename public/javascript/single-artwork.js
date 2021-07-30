const getSingleArtwork = (e) => {
    e.preventDefault();

    const artworkID = e.path[1].id

    window.location.href = `/all-artwork/single-artwork/${artworkID}`
}

document.querySelector('.art-list').addEventListener('click', getSingleArtwork);