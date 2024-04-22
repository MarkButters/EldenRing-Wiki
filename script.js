
const contentMap = {
  content1: {
    titles: ['Title 1', 'Title 1B', 'Title 1C'],
    bodies: [
      'Paragraph for button 1, first part.',
      'Paragraph for button 1, second part.',
      'Paragraph for button 1, third part.'
    ]
    
  },
  
  content2: {
    titles: ['Title 2', 'Title 2B'],
    bodies: [
      'Paragraph for button 2, first part.',
      'Paragraph for button 2, second part.'
    ]
  },
  content3: {
    titles: ['Title 3'],
    bodies: ['Paragraph for button 3.']
  },
  content4: {
    titles: ['Title 4'],
    bodies: ['Paragraph for button 4.']
  },
  content5: {
    titles: ['Title 5'],
    bodies: ['Paragraph for button 5.']
  },
  
};

function changeContent(contentId) {
  const contentContainer = document.getElementById('main-content');
  const selectedContent = contentMap[contentId];

  contentContainer.innerHTML = '';

  selectedContent.titles.forEach((title, index) => {
    const titleElement = document.createElement('h1');
    const bodyElement = document.createElement('p');
    const imageElement = document.createElement('img');
    
    imageElement.src = `Images/${contentId}Image${index}.jpg`; 
    imageElement.alt = 'Descriptive text'; 


    titleElement.textContent = title;
    bodyElement.textContent = selectedContent.bodies[index];

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(bodyElement);
    contentContainer.appendChild(imageElement); 
  });
}
