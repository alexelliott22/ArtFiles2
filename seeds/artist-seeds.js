const {Artist} = require('../models')

const artistData = [

{
    artist_name: 'Edouard Manet',
    birth_date: '1832',
    death_date: '1883'

},



{   
    artist_name: 'Paul Cezanne,',
    birth_date: '1839',
    death_date: '1906'

},


{   
    artist_name: 'Peter Paul Rubens', 
    birth_date: '1577',
    death_date: '1640'

},


{   artist_name: 'Edgar Degas', 
    birth_date: '1834',
    death_date: '1917'

},


{
    artist_name: 'Vincent Van Gogh',
    birth_date: '1853',
    death_date: '1890'
    
},


{  
    artist_name: 'Elizabeth Vigee-LeBrun',
    birth_date: '1755', 
    death_date: '1842'

},



{ 
    artist_name: 'Leonardo da Vinci', 
    birth_date: '1452',
    death_date: '1519'

},



{
    artist_name: 'Jacques Louis David', 
    birth_date: '1748',
    death_date: '1825'

}, 



{ 
    artist_name: 'James Abbott McNeill Whistler', 
    birth_date: '1834',
    death_date: '1903'

},



{ 
    artist_name: 'George Bellows',
    birth_date: '1882',
    death_date: '1925'

},



{ 
    artist_name: 'Rembrandt van Rijn',
    birth_date: '1606',
    death_date: '1669'
    
},



{
    artist_name: 'Winslow Homer', 
    birth_date: '1836',
    death_date: '1910'

},



{ 
    artist_name: 'Edward Hopper',
    birth_date: '1882',
    death_date: '1967'

},


{
    artist_name: 'Pablo Picasso',
    birth_date: '1881',
    death_date: '1973'

},



{
    artist_name: 'Salvador Dali',
    birth_date: '1904',
    death_date: '1989'

},




{
    artist_name: 'Roy Lichtenstein', 
    birth_date: '1923',
    death_date: '1997'


},



{   
    artist_name: 'Hans Holbein the Younger',
    birth_date: '1497',
    death_date: '1543'

},

{
    artist_name: 'Jan van Eyck', 
    birth_date: '1390',
    death_date: '1441'

},


{
    artist_name: 'J. M. W. Turner',
    birth_date: '1775',
    death_date: '1851'

}, 


{
    artist_name: 'Michelangelo Buonarroti',
    birth_date: '1475',
    death_date: '1564'

},

{
    artist_name: 'Sandro Botticelli',
    birth_date: '1445',
    death_date: '1510'
},

{
    artist_name: 'Raphael',
    birth_date: '1483',
    death_date: '1520'
},

{
    artist_name: 'Artemisia Gentileschi',
    birth_date: '1593',
    death_date: '1654'
},

{
    artist_name: 'William Bouguereau',
    birth_date: '1825',
    death_date: '1905'
},

{
    artist_name: 'Jacob Lawrence',
    birth_date: '1917',
    death_date: '2000'
},

{
    artist_name: 'Gustave Courbet',
    birth_date: '1819',
    death_date: '1877'
},

{
    artist_name: 'Gustave Caillebotte',
    birth_date: '1848',
    death_date: '1894'
},

{
    artist_name: 'Johannes Vermeer',
    birth_date: '1632',
    death_date: '1675'
},

{
    artist_name: 'Auguste Rodin',
    birth_date: '1840',
    death_date: '1917'
},

{
    artist_name: 'Thutmose',
    birth_date: 'unknown',
    death_date: 'unknown'
},

{
    artist_name: 'John Singer Sargent',
    birth_date: '1856',
    death_date: '1925'
},

{
    artist_name: 'Caravaggio',
    birth_date: '1571',
    death_date: '1610' 
},

{
    artist_name: 'Claude Monet',
    birth_date: '1840',
    death_date: '1926' 
},

{
    artist_name: 'Unknown',
    birth_date: 'Unknown',
    death_date: 'Unknown' 
}

];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;