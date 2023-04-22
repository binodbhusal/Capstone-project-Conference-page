const navbarNav = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.close-btn');

navbarToggler.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navbarNav.classList.remove('show');
});

const featureSpeaker = [
  {
    profileimage: 'images/binodprofile1.png',
    name: 'Binod Bhusal',
    description1: 'World-renowned keynote speaker',
    description2: 'Using a dynamic mix of human psychology, quantum science, business strategy and futurism, John creates talks, writes books, delivers masterclasses',
  },
  {
    profileimage: 'images/cris.png',
    name: 'Cristina Silver',
    description1: 'Web3 expert and founder of Blackwood',
    description2: 'She is an experienced web3 expert and communications professional. As the founder of Blackwood, she helps traditional businesses adopt blockchain, NFTs, and cryptocurrencies.',
  },
  {
    profileimage: 'images/andrew.png',
    name: 'Andrew Gill',
    description1: 'Andrew Grill is a former IBM Global Managing Partner',
    description2: 'Well-respected futurist speaker, technology trends expert, and author. He has over 30 years of experience leading technology companies, including as a former IBM Global Managing Partner.',
  },
  {
    profileimage: 'images/amanda.png',
    name: 'Amanda Johnstone',
    description1: ' An exceptional leader and a captivating evangelist',
    description2: 'There is no other woman on the planet like Amanda Johnstone. She invents technologies to improve the human condition. TIME awarded her as a Next Generation Leader.',
  },
  {
    profileimage: 'images/gerrie.png',
    name: 'Gerrie Smits',
    description1: 'Gerrie is a seasoned professional with 25 years of experience in industries.',
    description2: 'Gerrie is a versatile professional with a background in music, television, and civil service. He has over 25 years of experience in industries that have been disrupted by the internet',

  },
  {
    profileimage: 'images/avery.png',
    name: 'Avery Akkineni',
    description1: 'President of Vayner NFT, Former Head of VaynerMedia.',
    description2: 'Avery serves as the President of Vayner NFT. She leads the company mission to build long-term strategic NFT projects for the world leading intellectual property owners.',
  },
];

const featuresection = document.getElementById('feature-section');
const featureDiv = document.createElement('div');
featureDiv.classList.add('feature');

for (let i = 0; i < featureSpeaker.length; i++) {
  const speaker = featureSpeaker[i];

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-feature');

  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');

  const profileImg = document.createElement('img');
  profileImg.classList.add('profile-image');
  profileImg.src = speaker.profileimage;
  profileImg.alt = 'profile Image';

  const profileInfoDiv = document.createElement('div');
  profileInfoDiv.classList.add('profile-info');

  const titleSpeaker = document.createElement('h3');
  titleSpeaker.classList.add('title-speaker');
  titleSpeaker.textContent = speaker.name;

  const speakerInfo = document.createElement('p');
  speakerInfo.classList.add('spekaer-info');
  speakerInfo.textContent = speaker.description1;

  const featureHr = document.createElement('hr');
  featureHr.classList.add('feature-hr');

  const speakerDetails = document.createElement('p');
  speakerDetails.classList.add('speaker-details');
  speakerDetails.textContent = speaker.description2;

  profileDiv.appendChild(profileImg);
  profileInfoDiv.appendChild(titleSpeaker);
  profileInfoDiv.appendChild(speakerInfo);
  profileInfoDiv.appendChild(featureHr);
  profileInfoDiv.appendChild(speakerDetails);

  cardDiv.appendChild(profileDiv);
  cardDiv.appendChild(profileInfoDiv);

  featureDiv.appendChild(cardDiv);
}

featuresection.appendChild(featureDiv);
