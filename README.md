# StarwarsDatabase

First ever attempt at webscraping so hopefully this works for anyhting you search with on www.starwars.com/databank

Uses Node.js. So make sure you have that. 
Follow this link:
https://www.npmjs.com/get-npm

1. git clone https://github.com/nathanielMTucker/StarwarsDatabase.git
2. npm init
3. node starwars_webscrapping [Name-to-search] [optional-export-file]

Name search mush be lowercase and have - inbetween spaces, no other special characters. Use starwars.com to get the proper name you want to search.
Also, the exported file must be in json, it wont let you do any other kind of file.

ex. node starwars_webscrapping boba-fett boba.json

will return

{
  name: 'Boba Fett',
  description: 'With his customized Mandalorian armor, deadly weaponry, and silent demeanor, Boba Fett was one of the most feared bounty hunters in the galaxy. A genetic clone of his “father,” bounty hunter Jango Fett, Boba learned combat and martial skills from a young age. Over the course of his career, which included contracts for the Empire and the criminal underworld, he became a legend.',
  data: {
    Appearances: [
      'Star Wars :  A New Hope',
      'Star Wars :  The Empire Strikes Back',
      'Star Wars :  Returnofthe Jedi',
      'Star Wars :  Attackofthe Clones',
      'Star Wars :  The Clone Wars',
      'The Mandalorian'
    ],
    Locations: [ 'Kamino' ],
    Gender: [ 'Male' ],
    Dimensions: [ 'Height : 1.83m' ],
    species: [ 'Human' ],
    Vehicles: [ 'Slave I' ],
    Weapons: [ 'Z-6 Jetpack', 'Blaster Rifle', 'Flame Thrower' ]
  }
}

***I totally did this instead of homework***
