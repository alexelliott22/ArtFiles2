const { Artwork} = require('../models');

const artData = [

{

    title: 'Bar at the Folies Bergere',
    medium: 'oil on canvas',
    date: '1882',
    style: 'Impressionism',
    location: 'Courtauld Gallery, London, UK',
    artist_id: 1,
    museum_id: 5,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Edouard_Manet%2C_A_Bar_at_the_Folies-Berg%C3%A8re.jpg'

},
{

    title: 'Card Players',
    medium: 'oil on canvas',
    date: '1892',
    style: 'Post-Impressionism',
    location: 'Courtauld Gallery, London, UK',
    artist_id: 2,
    museum_id: 5,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Paul_C%C3%A9zanne%2C_1892-95%2C_Les_joueurs_de_carte_%28The_Card_Players%29%2C_60_x_73_cm%2C_oil_on_canvas%2C_Courtauld_Institute_of_Art%2C_London.jpg'
},   
{

    title: 'Landscape by Moonlight',
    medium: 'oil on panel',
    date: '1672',
    style: 'Baroque',
    location: 'Courtauld Gallery, London, UK',
    artist_id: 3,
    museum_id: 5,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Rubens_Landscape_by_moonlight.jpg'
},
{
    title: 'Lady with a Parasol',
    medium: 'oil on canvas',
    date: '1870',
    style: 'Impressionism',
    location: 'Courtauld Gallery, London, UK',
    artist_id: 4,
    museum_id: 5,
    image_url: 'https://2a2ths32b67ktlbny1dkgo1b-wpengine.netdna-ssl.com/aah/wp-content/uploads/sites/2/Edgar-Degas-Lady-with-a-Parasol-1870-72.jpg'
},
{
    title: 'Self-Portrait with Bandaged Ear',
    medium: 'oil on canvas',
    date: '1889',
    style: 'Post-Impressionism',
    location: 'Courtauld Gallery, London, UK',
    artist_id: 5,
    museum_id: 5,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg'
},
{
    title: 'Madame Vigee-LeBrun and Her Daughter',
    medium: 'oil on canvas',
    date: '1786',
    style: 'Rococo',
    location: 'Louvre, Paris, France',
    artist_id: 6,
    museum_id: 4,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Self-portrait_with_Her_Daughter_by_Elisabeth-Louise_Vig%C3%A9e_Le_Brun.jpg'
},
{
    title: 'Mona Lisa',
    medium: 'oil on wood panel',
    date: '1519',
    style: 'High Renaissance',
    location: 'Louvre, Paris, France',
    artist_id: 7,
    museum_id: 4,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
},
{
    artist_name: 'Unknown',
    title: 'Venus de Milo',
    medium: 'marble',
    date: '130 BCE',
    style: 'Classic Antiquity',
    location: 'Louvre, Paris, France',
    artist_id: 34,
    museum_id: 4
},
{
    title: 'Great Sphinx of Tanis',
    medium: 'rose granite',
    date: '2600 BC',
    style: 'Egyptian',
    location: 'Louvre, Paris, France',
    artist_id: 34,
    museum_id: 4
},
{
    title: 'Oath of the Horatii',
    medium: 'oil on canvas',
    date: '1786',
    style: 'Neo-Classicism',
    location: 'Louvre, Paris, France',
    artist_id: 8,
    museum_id: 4
},
{

    title:'Nocturne (The Thames at Battersea)',
    medium: 'lithotint',
    date: '1878',
    style: 'Aesthetic Movement',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 9,
    museum_id: 1
},
{

    title: 'Dempsey through the Ropes',
    medium: 'lithographic crayon on paper',
    date: '1923',
    style: 'Ash Can School',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 10,
    museum_id: 1
},
{

    title: 'Aristotle with a Bust of Homer',
    medium: 'oil on canvas',
    date: '1653',
    style: 'Dutch Golden Age',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 11,
    museum_id: 1
},
{

    title: 'The Gulf Stream',
    medium: 'oil on canvas',
    date: '1889',
    style: 'Naturalism',
    location: 'The Metropolitan Museum of Art',
    artist_id: 12,
    museum_id: 1
},
{

    title: 'The Death of Socrates',
    medium: 'oil on canvas',
    date: '1787',
    style: 'Neo-Classical',
    location: 'The Metropolitan Museum of Art',
    artist_id: 8,
    museum_id: 1
},
{

    title: 'Nighthawks',
    medium: 'oil on canvas',
    date: '1942',
    style: 'Realist',
    location: 'The Art Institute of Chicago',
    artist_id: 13
},
{

    title: 'Girl before Mirror',
    medium: 'oil on canvas',
    date: '1932',
    style: 'Cubism',
    location: 'MOMA',
    artist_id: 14
},
{

    title: 'Starry Night',
    medium: 'oil on canvas',
    date: '1912',
    style: 'Post-Impressionism',
    location: 'MOMA',
    artist_id: 5
},
{

    title: 'Persistence of Memory',
    medium: 'oil on canvas',
    date: '1931',
    style: 'Surrealism',
    location: 'MOMA',
    artist_id: 15
},
{

    title: 'Drowning Girl',
    medium: 'oil on acrylic',
    date: '1963',
    style: 'Pop Art',
    location: 'MOMA',
    artist_id: 16
},
{

    title: 'The Ambassadors',
    medium: 'oil on oak',
    date: '1533',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 17,
    museum_id: 3,
    image_url: 'https://en.wikipedia.org/wiki/The_Ambassadors_(Holbein)#/media/File:Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg'
},
{

    title: 'The Virgin of the Rocks',
    medium: 'oil on panel',
    date: '1483-1486',
    style: 'Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 7,
    museum_id: 3
},
{

    title: 'Self Portrait at Age of 34',
    medium: 'oil on canvas',
    date: '1640',
    style: 'Dutch Golden Age',
    location: 'National Gallery of Art, London',
    artist_id: 11,
    museum_id: 3
},
{

    title: 'The Arnolfini Portrait',
    medium: 'oil on oak panel',
    date: '1434',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 18,
    museum_id: 3
},
{

    title: 'The Fighting Temeraire',
    medium: 'oil on canvas',
    date: '1839',
    style: 'Romanticism',
    location: 'National Gallery of Art, London',
    artist_id: 19,
    museum_id: 3
},
{

    title: 'Guernica',
    medium: 'oil on canvas',
    date: '1937',
    style: 'Cubism, Surrealism',
    location:'Museo Reina Sofia, Madrid, Spain',
    artist_id: 14
},
{

    title: 'David',
    medium: 'marble sculpture',
    date: '1504',
    style: 'Renaissance',
    location: 'Galleria dell Accademia, Florence, Italy',
    artist_id: 20
},
{

    title: 'Birth of Venus',
    medium: 'oil on panel',
    date: '1485',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy',
    artist_id: 21
},
{

    title: 'School of Athens',
    medium: 'fresco',
    date: '1511',
    style: 'Renaissance',
    location: 'Vatican Museum, Rome, Italy',
    artist_id: 22
},
{

    title: 'Judith and Holofernes',
    medium: 'oil on canvas',
    date: '1612',
    style: 'Renaissance',
    location: 'Museum Capodimonte, Naples, Italy',
    artist_id: 23
},
{

    title: 'Nymphs and Satyr',
    medium: 'oil on canvas',
    date: '1873',
    style: 'Accademic',
    location: 'Clark Art Institute, Williamstown, MA',
    artist_id: 24
},
{

    title: 'The Migration gained in momentum',
    medium: 'casein tempura on hardboard',
    date: '1940',
    style: 'Harlem Renaissance',
    location: 'MOMA',
    artist_id: 25
},
{

    title: 'Gas',
    medium: 'oil on canvas',
    date: '1940',
    style: 'Realist',
    location: 'MOMA',
    artist_id: 13
},
{

    title: 'The Desperate Man (self-portrait)',
    medium: 'oil on canvas',
    date: '1843',
    style: 'Romanticism',
    location: 'Private Collection',
    artist_id: 26
},
{

    title: 'The Floor Scrapers',
    medium: 'oil on canvas',
    date: '1874',
    style: 'Realism',
    location: 'The Orsay Museum, Paris, France',
    artist_id: 27 
},
{

    title: 'La Primavera',
    medium: 'oil on canvas',
    date: '1482',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy',
    artist_id: 21
},
{

    title: 'The Night Watch',
    medium: 'oil on canvas',
    date: '1642',
    style: 'Baroque',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 11
},
{

    title: 'Girl with the Pearl Earring',
    medium: 'oil on canvas',
    date: '1665',
    style: 'Dutch Golden Age',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 28 
},
{

    title: 'Self-portrait',
    medium: 'oil on canvas',
    date: '1887',
    style: 'Post-Impressionism',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 5
},
{

    title: 'The Thinker',
    medium: 'bronze',
    date: '1904',
    style: 'Impressionism',
    location: 'Rodin Museum, Paris, France',
    artist_id: 29
},
{

    title: 'Bust of Neferetiti',
    medium: 'limestone',
    date: '1341',
    style: 'Egyptian',
    location: 'Neues Museum, Berlin',
    artist_id: 30
},
{

    title: 'Madame X',
    medium: 'oil on canvas',
    date: '1884',
    style: 'Realism',
    location: 'The Metropolitain Museum of Art',
    artist_id: 31
},
{

    title: 'The Flagellation of Christ',
    medium: 'oil on canvas',
    date: '1607',
    style: 'Baroque',
    location: 'Church of San Domenico Maggiore, Naples',
    artist_id: 32 
},
{

    title: 'Water Lilies',
    medium: 'oil on canvas',
    date: '1914',
    style: 'Impressionism',
    location: 'MOMA',
    artist_id: 33
},
];
const seedArt = () => Artwork.bulkCreate(artData);

module.exports = seedArt;
