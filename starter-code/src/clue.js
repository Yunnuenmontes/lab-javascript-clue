let mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          45,
  image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur',
}



let drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          26,
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation:    'Scientist',
}


let profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  'Billionaire video game designer',
  age:          22,
  image:        'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
  occupation:   'Designer',
}


let missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          31,
  image:        'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation:   'Actor',
}


let mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          36,
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
}


let mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          62,
  image:        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
  occupation:   'Retired Football player',
}

// WEAPONS
let rope = {
  name: 'rope',
  weight: 10
}

let knife = {
  name: 'knife',
  weight: 8
}

let candlestick = {
  name: 'candlestick',
  weight: 2
}

let dumbbell = {
  name: 'dumbbell',
  weight: 30
}

let poison = {
  name: 'poison',
  weight: 2
}

let axe = {
  name: 'axe',
  weight: 15
}

let bat = {
  name: 'bat',
  weight: 13
}

let trophy = {
  name: 'trophy',
  weight: 25
}

let pistol = {
  name: 'pistol',
  weight: 20
}

let diningRoom = {
  name: 'Dining Room'
}

let conservatory = {
  name: 'Conservatory'
}

let kitchen = {
  name: 'Kitchen'
}

let study = {
  name: 'Study'
}

let library = {
  name: 'Library'
}

let billiardRoom = {
  name: 'Billiard Room'
}

let lounge = {
  name: 'Lounge'
}

let ballroom = {
  name: 'Ballroom'
}

let hall = {
  name: 'Hall'
}

let spa = {
  name: 'Spa'
}

let logivingRoom = {
  name: 'Living Room'
}

let observatory = {
  name: 'Observatory'
}

let theater = {
  name: 'Theater'
}

let guestHouse = {
  name: 'Guest House'
}

let patio = {
  name: 'Patio'
}


const charactersArray = [];
charactersArray.push(mrGreen, drOrchid, missScarlet, mrsPeacock, mrMustard);


const roomsArray = [];
roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, logivingRoom, observatory, theater, guestHouse, patio);


const weaponsArray = [];
weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

let randomSelector = function(array){
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}

let pickMystery = function() {
  return {
    suspect: randomSelector(charactersArray),
    room: randomSelector(roomsArray),
    weapon: randomSelector(weaponsArray),
  }
}

mysteryEnvelope = pickMystery();

let revealMystery = function(envelope) {
    return `${envelope.suspect.first_name} ${envelope.suspect.last_name} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!!!!`
}


console.log(revealMystery(mysteryEnvelope));





// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:    Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionaire video game designer
age:          22
image:        https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dining Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
const charactersArray = [];

// Rooms Collection
const roomsArray = [];

// Weapons Collection
const weaponsArray = [];
