
const contentMap = {
  content1: {
    titles: ['Uchigatana', 'Hookclaws', 'Rapier'],
    bodies: [
      'The Uchigatana is located in the Deathtouched Catacombs in Limgrave, the Samurai class starts with this weapon. The Uchigatana requires 11 in strength and 15 in dexterity.',
      'Hookclaws are located in Stormveil castle. The Hookclaws require 8 in strength and 14 in dexterity.',
      'The Rapier can be bought at the Twin Maiden Husks located at the Roundtable Hold for 1000 runes. The Rapier require 7 in strength and 12 in dexterity.'
    ]
    
  },
  
  content2: {
    titles: ['Greatsword', 'Claymore', 'Giant Crusher'],
    bodies: [
      'The Greatsword is located in Caelid near the Caelem Ruins site of grace. The Greatsword requires 31 in strength and 12 in dexterity.',
      'The Claymore is located in Castle Morne in Weeping Penisula. The Claymore requires 16 in strength and 13 in dexterity.',
      'The Giant Cursher is located in a carrige near the Outer Wall Phantom Tree site of grace. The Giant Crusher requires 60 in strength.'
    ]
  },

  content3: {
    titles: ['Sacred Relic Sword', 'Blasphemous Blade', "Envoy's Greathorn"],
    bodies: [
      'The Sacred Relic Sword can be made using the Elden Remembrance at the Roundtable Hold. The Sacred Relic Sword requires 14 in strength, 24 in dexterity and 22 in faith.',
      'The Blasphemous Blade can be made using the Remembrance of the Blashpemous at the Roundtable Hold, to get the remembrance of the Blashpemous you have to defeat Rykard, Lord of Blasphemy at Volcano Manor located in Mt.Gelmir. The Blasphemous Blade requires 22 in strength, 15 in dexterity and 21 in faith.',
      "The Envoy's Greathorn is dropped by the Giant Oracle Envoy, they are found at Miquwlla's Haligtreem. The Envoy's Greathorn requires 28 in strength, 12 in dexterity and 24 in faith"
  ]
  },

  content4: {
    titles: ['Moonveil', 'Starsourge Greatsword', "Bastard's Stars"],
    bodies: [
      'The Moonviel is acquired by defeating the Magma Wyrm in Gael Tunnel located in Caelid. The Moonviel requires 12 in strength, 18 in dexterity and 23 in intelligence.',
      

    ]
  },

  content5: {
    titles: ["River's of Blood", "Scavenger's Curved Sword", "Grave Scythe"],
    bodies: [
      "The River's of Blood is acquired by defeating Bloody Finger Okina near the Church of Repose located in the Mountaintops of the Giants. The River's of Blood requires 12 in strength, 18 in dexterity and 20 in arcane",


    ]
  },
  
};

function changeContent(contentId) {
  const contentContainer = document.getElementById('main-content');
  const selectedContent = contentMap[contentId];

  
  if (contentContainer.getAttribute('data-current-content') === contentId) {
    contentContainer.innerHTML = '';
    contentContainer.removeAttribute('data-current-content');
  } else {
    
    contentContainer.innerHTML = '';
    selectedContent.titles.forEach((title, index) => {
      const titleElement = document.createElement('h1');
      const bodyElement = document.createElement('p');
      const imageElement = document.createElement('img');

      imageElement.src = `Images/${contentId}Image${index}.png`;
      imageElement.alt = 'Descriptive text';

      titleElement.textContent = title;
      bodyElement.textContent = selectedContent.bodies[index];

      contentContainer.appendChild(titleElement);
      contentContainer.appendChild(bodyElement);
      contentContainer.appendChild(imageElement);
    });

  
    contentContainer.setAttribute('data-current-content', contentId);
  }
}


