const { Artwork} = require();

const artData = [

{
    artist_name: 'Edouard Manet',
    title: 'Bar at the Folies Bergere',
    medium: 'oil on canvas',
    date: '1882',
    style: 'Impressionism',
    location: 'Courtauld Gallery, London, UK'
},
{
    artist_name: 'Paul Cezanne',
    title: 'Card Players',
    medium: 'oil on canvas',
    date: '1892',
    style: 'Post-Impressionism',
    location: 'Courtauld Gallery, London, UK'
},   
{
    artist_name: 'Peter Paul Rubens',
    title: 'Landscape by Moonlight',
    medium: 'oil on panel',
    date: '1672',
    style: 'Baroque',
    location: 'Courtauld Gallery, London, UK'
},
{
    artist_name: 'Edgar Degas',
    title: 'Lady with a Parasol',
    medium: 'oil on canvas',
    date: '1870',
    style: 'Impressionism',
    location: 'Courtauld Gallery, London, UK'
},
{
    artist_name: 'Vincent Van Gogh',
    title: 'Self-Portrait with Bandaged Ear',
    medium: 'oil on canvas',
    date: '1889',
    style: 'Post-Impressionism',
    location: 'Courtauld Gallery, London, UK'
},
{
    artist_name: 'Elizabeth Vigee-LeBrun',
    title: 'Madame Vigee-LeBrun and Her Daughter',
    medium: 'oil on canvas',
    date: '1786',
    style: 'Rococo',
    location: 'Louvre, Paris, France'
},
{
    artist_name: 'Leonardo da Vinci',
    title: 'Mona Lisa',
    medium: 'oil on wood panel',
    date: '1519',
    style: 'High Renaissance',
    location: 'Louvre, Paris, France'
},
{
    artist_name: 'Unknown',
    title: 'Venus de Milo',
    medium: 'marble',
    date: '130 BCE',
    style: 'Classic Antiquity',
    location: 'Louvre, Paris, France'
},
{
    artist_name: 'Unknown',
    title: 'Great Sphinx of Tanis',
    medium: 'rose granite',
    date: '2600 BC',
    style: 'Egyptian',
    location: 'Louvre, Paris, France'
},
{
    artist_name: 'Jacques-Louis David',
    title: 'Oath of the Horatii',
    medium: 'oil on canvas',
    date: '1786',
    style: 'Neo-Classicism',
    location: 'Louvre, Paris, France'
},
{
    artist_name: 'James Abbott McNeill Whistler',
    title:'Nocturne (The Thames at Battersea)',
    medium: 'lithotint',
    date: '1878',
    style: 'Aesthetic Movement',
    location: 'The Metropolitan Museum of Art, NY, NY'
},
{
    artist_name: 'George Bellows',
    title: 'Dempsey through the Ropes',
    medium: 'lithographic crayon on paper',
    date: '1923',
    style: 'Ash Can School',
    location: 'The Metropolitan Museum of Art, NY, NY'
},
{
    artist_name: 'Rembranst van Rijn',
    title: 'Aristotle with a Bust of Homer',
    medium: 'oil on canvas',
    date: '1653',
    style: 'Dutch Golden Age',
    location: 'The Metropolitan Museum of Art, NY, NY'
},
{
    artist_name: 'Winslow Homer',
    title: 'The Gulf Stream',
    medium: 'oil on canvas',
    date: '1889',
    style: 'Naturalism',
    location: 'The Metropolitan Museum of Art'
},
{
    artist_name: 'Jacque-Louis David',
    title: 'The Death of Socrates',
    medium: 'oil on canvas',
    date: '1787',
    style: 'Neo-Classical',
    location: 'The Metropolitan Museum of Art'
},
{
    artist_name: 'Edward Hopper',
    title: 'Nighthawks',
    medium: 'oil on canvas',
    date: '1942',
    style: 'Realist',
    location: 'The Art Institute of Chicago'
},
{
    artist_name: 'Pablo Picasso',
    title: 'Girl before Mirror',
    medium: 'oil on canvas',
    date: '1932',
    style: 'Cubism',
    location: 'MOMA'
},
{
    artist_name: 'Vincent Van Gogh',
    title: 'Starry Night',
    medium: 'oil on canvas',
    date: '1912',
    style: 'Post-Impressionism',
    location: 'MOMA'
},
{
    artist_name: 'Salvador Dali',
    title: 'Persistence of Memory',
    medium: 'oil on canvas',
    date: '1931',
    style: 'Surrealism',
    location: 'MOMA'
},
{
    artist_name: 'Roy Lichtenstein',
    title: 'Drowning Girl',
    medium: 'oil on acrylic',
    date: '1963',
    style: 'Pop Art',
    location: 'MOMA'
},
{
    artist_name: 'Hans Holbein the Younger',
    title: 'The Ambassadors',
    medium: 'oil on oak',
    date: '1533',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London'
},
{
    artist_name: 'Leonardo da Vinci',
    title: 'The Virgin of the Rocks',
    medium: 'oil on panel',
    date: '1483-1486',
    style: 'Renaissance',
    location: 'National Gallery of Art, London'
},
{
    artist_name: 'Rembrandt',
    title: 'Self Portrait at Age of 34',
    medium: 'oil on canvas',
    date: '1640',
    style: 'Dutch Golden Age',
    location: 'National Gallery of Art, London'
},
{
    artist_name: 'Jan van Eyck',
    title: 'The Arnolfini Portrait',
    medium: 'oil on oak panel',
    date: '1434',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London'
},
{
    artist_name: 'J. M. W. Turner',
    title: 'The Fighting Temeraire',
    medium: 'oil on canvas',
    date: '1839',
    style: 'Romanticism',
    location: 'National Gallery of Art, London'
},
{
    artist_name: 'Pablo Picasso',
    title: 'Guernica',
    medium: 'oil on canvas',
    date: '1937',
    style: 'Cubism, Surrealism',
    location:'Museo Reina Sofia, Madrid, Spain'
},
{
    artist_name: 'Michelangelo',
    title: 'David',
    medium: 'marble sculpture',
    date: '1504',
    style: 'Renaissance',
    location: 'Galleria dell Accademia, Florence, Italy'
},
{
    artist_name: 'Sandro Botticelli',
    title: 'Birth of Venus',
    medium: 'oil on panel',
    date: '1485',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy'
},
{
    artist_name: 'Rafael',
    title: 'School of Athens',
    medium: 'fresco',
    date: '1511',
    style: 'Renaissance',
    location: 'Vatican Museum, Rome, Italy'
},
{
    artist_name: 'Artemisia Gentelleschi',
    title: 'Judith and Holofernes',
    medium: 'oil on canvas',
    date: '1612',
    style: 'Renaissance',
    location: 'Museum Capodimonte, Naples, Italy'
},
{
    artist_name: 'William Bourgereau',
    title: 'Nymphs and Satyr',
    medium: 'oil on canvas',
    date: '1873',
    style: 'Accademic',
    location: 'Clark Art Institute, Williamstown, MA'
},
{
    artist_name: 'Jacob Lawrence',
    title: 'The Migration gained in momentum',
    medium: 'casein tempura on hardboard',
    date: '1940',
    style: 'Harlem Renaissance',
    location: 'MOMA'
},
{
    artist_name: 'Edward Hopper',
    title: 'Gas',
    medium: 'oil on canvas',
    date: '1940',
    style: 'Realist',
    location: 'MOMA'
},
{
    artist_name: 'Gustave Courbet',
    title: 'The Desperate Man (self-portrait)',
    medium: 'oil on canvas',
    date: '1843',
    style: 'Romanticism',
    location: 'Private Collection'
},
{
    artist_name: 'Gustave Caillebotte',
    title: 'The Floor Scrapers',
    medium: 'oil on canvas',
    date: '1874',
    style: 'Realism',
    location: 'The Orsay Museum, Paris, France'
},
{
    artist_name: 'Sandro Botticelli',
    title: 'La Primavera',
    medium: 'oil on canvas',
    date: '1482',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy'
},
{
    artist_name: 'Rembrandt',
    title: 'The Night Watch',
    medium: 'oil on canvas',
    date: '1642',
    style: 'Baroque',
    location: 'Rijksmuseum, Amsterdam, Netherlands'
},
{
    artist_name: 'Vermeer',
    title: 'Girl with the Pearl Earring',
    medium: 'oil on canvas',
    date: '1665',
    style: 'Dutch Golden Age',
    location: 'Rijksmuseum, Amsterdam, Netherlands'
},
{
    artist_name: 'Vincent Van Gogh',
    title: 'Self-portrait',
    medium: 'oil on canvas',
    date: '1887',
    style: 'Post-Impressionism',
    location: 'Rijksmuseum, Amsterdam, Netherlands'
},
{
    artist_name: 'Rodin',
    title: 'The Thinker',
    medium: 'bronze',
    date: '1904',
    style: 'Impressionism',
    location: 'Rodin Museum, Paris, France'
},
{
    artist_name: 'Thutmose',
    title: 'Bust of Neferetiti',
    medium: 'limestone',
    date: '1341',
    style: 'Egyptian',
    location: 'Neues Museum, Berlin'
},
{
    artist_name: 'John Singer Sargent',
    title: 'Madame X',
    medium: 'oil on canvas',
    date: '1884',
    style: 'Realism',
    location: 'The Metropolitain Museum of Art'
},
{
    artist_name: 'Caravaggio',
    title: 'The Flagellation of Christ',
    medium: 'oil on canvas',
    date: '1607',
    style: 'Baroque',
    location: 'Church of San Domenico Maggiore, Naples'
},
{
    artist_name: 'Claude Monet',
    title: 'Water Lilies',
    medium: 'oil on canvas',
    date: '1914',
    style: 'Impressionism',
    location: 'MOMA'
},
];
const seedArt = () => Artwork.bulkCreate(artData);

module.exports = seedArt;
