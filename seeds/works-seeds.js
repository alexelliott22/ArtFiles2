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
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg'
},
{
    artist_name: 'Unknown',
    title: 'Venus de Milo',
    medium: 'marble',
    date: '130 BCE',
    style: 'Classic Antiquity',
    location: 'Louvre, Paris, France',
    artist_id: 34,
    museum_id: 4,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Front_views_of_the_Venus_de_Milo.jpg/1024px-Front_views_of_the_Venus_de_Milo.jpg'
},
{
    title: 'Great Sphinx of Tanis',
    medium: 'rose granite',
    date: '2600 BC',
    style: 'Egyptian',
    location: 'Louvre, Paris, France',
    artist_id: 34,
    museum_id: 4,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Great_Sphinx_of_Tanis.jpg/2560px-Great_Sphinx_of_Tanis.jpg'
},
{
    title: 'Oath of the Horatii',
    medium: 'oil on canvas',
    date: '1786',
    style: 'Neo-Classicism',
    location: 'Louvre, Paris, France',
    artist_id: 8,
    museum_id: 4,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg'
},
{

    title:'Nocturne (The Thames at Battersea)',
    medium: 'lithotint',
    date: '1878',
    style: 'Aesthetic Movement',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 9,
    museum_id: 1,
    image_url: 'https://images.metmuseum.org/CRDImages/dp/original/DP813769.jpg'
},
{

    title: 'Dempsey and Firpo',
    medium: 'oil on canvas',
    date: '1923',
    style: 'Ash Can School',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 10,
    museum_id: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Bellows_George_Dempsey_and_Firpo_1924.jpg'
},
{

    title: 'Aristotle with a Bust of Homer',
    medium: 'oil on canvas',
    date: '1653',
    style: 'Dutch Golden Age',
    location: 'The Metropolitan Museum of Art, NY, NY',
    artist_id: 11,
    museum_id: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_WGA19232.jpg/1920px-Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_WGA19232.jpg'
},
{

    title: 'The Gulf Stream',
    medium: 'oil on canvas',
    date: '1889',
    style: 'Naturalism',
    location: 'The Metropolitan Museum of Art',
    artist_id: 12,
    museum_id: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg/2880px-Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg'
},
{

    title: 'The Death of Socrates',
    medium: 'oil on canvas',
    date: '1787',
    style: 'Neo-Classical',
    location: 'The Metropolitan Museum of Art',
    artist_id: 8,
    museum_id: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/2880px-David_-_The_Death_of_Socrates.jpg'
},
{

    title: 'Nighthawks',
    medium: 'oil on canvas',
    date: '1942',
    style: 'Realist',
    location: 'The Art Institute of Chicago',
    artist_id: 13,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/2880px-Nighthawks_by_Edward_Hopper_1942.jpg'
},
{

    title: 'Girl before Mirror',
    medium: 'oil on canvas',
    date: '1932',
    style: 'Cubism',
    location: 'MOMA',
    artist_id: 14,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/6/60/GirlBeforeAMirror.jpg'
},
{

    title: 'Starry Night',
    medium: 'oil on canvas',
    date: '1912',
    style: 'Post-Impressionism',
    location: 'MOMA',
    artist_id: 5,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'
},
{

    title: 'Persistence of Memory',
    medium: 'oil on canvas',
    date: '1931',
    style: 'Surrealism',
    location: 'MOMA',
    artist_id: 15,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg'
},
{

    title: 'Drowning Girl',
    medium: 'oil on acrylic',
    date: '1963',
    style: 'Pop Art',
    location: 'MOMA',
    artist_id: 16,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg'
},
{

    title: 'The Ambassadors',
    medium: 'oil on oak',
    date: '1533',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 17,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg/1920px-Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg'
},
{

    title: 'The Virgin of the Rocks',
    medium: 'oil on panel',
    date: '1483-1486',
    style: 'Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 7,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Leonardo_da_Vinci_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg/1280px-Leonardo_da_Vinci_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg'
},
{

    title: 'Self Portrait at Age of 34',
    medium: 'oil on canvas',
    date: '1640',
    style: 'Dutch Golden Age',
    location: 'National Gallery of Art, London',
    artist_id: 11,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rembrandt%2C_Self_Portrait_at_the_Age_of_34.jpg/1920px-Rembrandt%2C_Self_Portrait_at_the_Age_of_34.jpg'
},
{

    title: 'The Arnolfini Portrait',
    medium: 'oil on oak panel',
    date: '1434',
    style: 'Northern Renaissance',
    location: 'National Gallery of Art, London',
    artist_id: 18,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/1920px-Van_Eyck_-_Arnolfini_Portrait.jpg'
},
{

    title: 'The Fighting Temeraire',
    medium: 'oil on canvas',
    date: '1839',
    style: 'Romanticism',
    location: 'National Gallery of Art, London',
    artist_id: 19,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/2560px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg'
},
{

    title: 'Guernica',
    medium: 'oil on canvas',
    date: '1937',
    style: 'Cubism, Surrealism',
    location:'Museo Reina Sofia, Madrid, Spain',
    artist_id: 14,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/GUERNICA.jpg'
},
{

    title: 'David',
    medium: 'marble sculpture',
    date: '1504',
    style: 'Renaissance',
    location: 'Galleria dell Accademia, Florence, Italy',
    artist_id: 20,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Michelangelo%27s_David_2015.jpg/1280px-Michelangelo%27s_David_2015.jpg'
},
{

    title: 'Birth of Venus',
    medium: 'oil on panel',
    date: '1485',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy',
    artist_id: 21,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/2560px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg'
},
{

    title: 'School of Athens',
    medium: 'fresco',
    date: '1511',
    style: 'Renaissance',
    location: 'Vatican Museum, Rome, Italy',
    artist_id: 22,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/2560px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg'
},
{

    title: 'Judith slaying Holofernes',
    medium: 'oil on canvas',
    date: '1614',
    style: 'Renaissance',
    location: 'Museum Capodimonte, Naples, Italy',
    artist_id: 23,
    museum_id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg/1920px-Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg'
},
{

    title: 'Nymphs and Satyr',
    medium: 'oil on canvas',
    date: '1873',
    style: 'Accademic',
    location: 'Clark Art Institute, Williamstown, MA',
    artist_id: 24,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/William-Adolphe_Bouguereau_%281825-1905%29_-_Nymphs_and_Satyr_%281873%29_HQ.jpg/1920px-William-Adolphe_Bouguereau_%281825-1905%29_-_Nymphs_and_Satyr_%281873%29_HQ.jpg'
},
{

    title: 'The Migration Panel 1',
    medium: 'casein tempura on hardboard',
    date: '1940',
    style: 'Harlem Renaissance',
    location: 'MOMA',
    artist_id: 25,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/0/02/Migration_Series_Panel_1.jpg'
},
{

    title: 'Gas',
    medium: 'oil on canvas',
    date: '1940',
    style: 'Realist',
    location: 'MOMA',
    artist_id: 13,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Edward_Hopper_Gas.png'
},
{

    title: 'The Desperate Man (self-portrait)',
    medium: 'oil on canvas',
    date: '1843',
    style: 'Romanticism',
    location: 'Private Collection',
    artist_id: 26,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843%29.jpg'
},
{

    title: 'The Floor Scrapers',
    medium: 'oil on canvas',
    date: '1874',
    style: 'Realism',
    location: 'The Orsay Museum, Paris, France',
    artist_id: 27,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg/2560px-Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg'
},
{

    title: 'La Primavera',
    medium: 'oil on canvas',
    date: '1482',
    style: 'Renaissance',
    location: 'Uffizi, Florence, Italy',
    artist_id: 21,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/2560px-Botticelli-primavera.jpg'
},
{

    title: 'The Night Watch',
    medium: 'oil on canvas',
    date: '1642',
    style: 'Baroque',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 11,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/2560px-The_Night_Watch_-_HD.jpg'
},
{

    title: 'Girl with the Pearl Earring',
    medium: 'oil on canvas',
    date: '1665',
    style: 'Dutch Golden Age',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 28,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1920px-1665_Girl_with_a_Pearl_Earring.jpg'
},
{

    title: 'Self-portrait',
    medium: 'oil on canvas',
    date: '1887',
    style: 'Post-Impressionism',
    location: 'Rijksmuseum, Amsterdam, Netherlands',
    artist_id: 5,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Zelfportret_Rijksmuseum_SK-A-3262.jpeg/1920px-Zelfportret_Rijksmuseum_SK-A-3262.jpeg'
},
{

    title: 'The Thinker',
    medium: 'bronze',
    date: '1904',
    style: 'Impressionism',
    location: 'Rodin Museum, Paris, France',
    artist_id: 29,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/1280px-Mus%C3%A9e_Rodin_1.jpg'
},
{

    title: 'Bust of Neferetiti',
    medium: 'limestone',
    date: '1341',
    style: 'Egyptian',
    location: 'Neues Museum, Berlin',
    artist_id: 30,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Nofretete_Neues_Museum.jpg'
},
{

    title: 'Madame X',
    medium: 'oil on canvas',
    date: '1884',
    style: 'Realism',
    location: 'The Metropolitain Museum of Art',
    artist_id: 31,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg/1024px-Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg'
},
{

    title: 'The Flagellation of Christ',
    medium: 'oil on canvas',
    date: '1607',
    style: 'Baroque',
    location: 'Church of San Domenico Maggiore, Naples',
    artist_id: 32,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Flagellation_of_Christ-Caravaggio_%281607%29.jpg/1920px-The_Flagellation_of_Christ-Caravaggio_%281607%29.jpg'
},
{

    title: 'Water Lilies',
    medium: 'oil on canvas',
    date: '1915',
    style: 'Impressionism',
    location: 'MOMA',
    artist_id: 33,
    museum_id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Claude_Monet_Nympheas_1915_Musee_Marmottan_Paris.jpg'
},
];
const seedArt = () => Artwork.bulkCreate(artData);

module.exports = seedArt;
