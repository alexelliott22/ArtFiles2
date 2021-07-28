const addArtwork = async (e) => {
    try {
        e.preventDefault();
        
        const artistName = document.querySelector('#artistName').value;
        const title = document.querySelector('#artwork-title').value;
        const medium = document.querySelector('#artwork-medium').value.trim();
        const date = document.querySelector('#artwork-date').value.trim();
        const style = document.querySelector('#artwork-style').value;
        const location = document.querySelector('#artwork-location').value;
        const artworkImg = document.querySelector('#artwork-img').value.trim();


        const artist_id = await getArtistID(artistName);
        
        // if(title && medium && style && location) {
        //     const response = await fetch('/api/artwork', {
        //         method: 'post',
        //         body: JSON.stringify({
        //             artist_id,
        //             medium,
        //             title,
        //             date,
        //             style,
        //             location
        //         }),
        //         headers: { 'Content-Type': 'application/json' }
        //     });
            
        //     if (response.ok) {
        //         document.location.replace('/');
        //     } else {
        //         alert(response.statusText);
        //     }
        // }
    } catch (error) {
        console.log(error)
    }
}

const getArtistID = async (artistName) => {
    const artists = await fetch('/api/artists')

    console.log(artists)

    const artistMatch = artists.filter(artist => {
        if(artist.artist_name == artistName) {
            return artist.artist_id;
        }
    })

    console.log(artistMatch)

}

document.querySelector('#add-artwork').addEventListener('click', addArtwork)