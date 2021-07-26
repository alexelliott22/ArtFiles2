const addArtwork = async (e) => {
    try {
        console.log('here')
        e.preventDefault();
        
        const artistName = document.querySelector('#artist-name').value.trim();
        const title = document.querySelector('#title-input').value.trim();
        const medium = document.querySelector('#medium').value.trim();
        const date = document.querySelector('#date').value.trim();
        const style = document.querySelector('#style').value.trim();
        const location = document.querySelector('#location').value.trim();
    

        const artist_id = await getArtistID(artistName);
        
        if(title && medium && style && location) {
            const response = await fetch('/api/artwork', {
                method: 'post',
                body: JSON.stringify({
                    artist_id,
                    medium,
                    title,
                    date,
                    style,
                    location
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

const getArtistID = async (artistName) => {
    const artists = await fetch('/api/artist')

    artists.filter(artist => {
        if(artist.artist_name == artistName) {
            return artist.artist_id;
        }
    })

}

document.querySelector('#add-artwork').addEventListener('click', addArtwork)