const addArtist = async (e) => {
    try {
        e.preventDefault();

        const artist_name = document.querySelector('#artistName').value;
        const birth_date = document.querySelector('#birthDate').value.trim();
        const death_date = document.querySelector('#deathDate').value.trim();

        if(artist_name) {
            const response = await fetch('/api/artists', {
                method: 'post',
                body: JSON.stringify({
                    artist_name,
                    birth_date,
                    death_date
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

document.querySelector('#add-artist').addEventListener('click', addArtist);