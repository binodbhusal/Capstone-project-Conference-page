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
    profileimage: 'images/binodprofile.png',
    name: 'Binod Bhusal',
    description1: 'World-renowned keynote speaker, futures strategist, lecturer, best-selling author',
    description2: 'Using a dynamic mix of human psychology, quantum science, business strategy and futurism, John creates talks, writes books, delivers masterclasses and sits on boards to help guide future-forward leaders who are ready to lean into uncertainty, overcome doubt, and rise with courage, clarity and power',
  },
  {
    profileimage: 'images/cristina-feature2.jpeg',
    name: 'Cristina Silver',
    description1: 'Web3 expert and founder of Blackwood, a consultancy firm that helps traditional businesses adopt blockchain, NFTs, and cryptocurrencies.',
    description2: 'She is an experienced web3 expert and communications professional. As the founder of Blackwood, she helps traditional businesses adopt blockchain, NFTs, and cryptocurrencies. With a focus on digital fine art, she provides detailed case studies of successful and unsuccessful NFT and metaverse projects.',
  },
  {
    profileimage: 'images/andrewgill.png',
    name: 'Andrew Gill',
    description1: 'Andrew Grill is a former IBM Global Managing Partner, futurist speaker, and technology trends expert with over 30 years of experience in leading technology companies.',
    description2: 'Well-respected futurist speaker, technology trends expert, and author. He has over 30 years of experience leading technology companies, including as a former IBM Global Managing Partner. Andrew is known for his practical and actionable insights on digital transformation and AI, which can help organizations achieve their goals and stay ahead of the curve.',
  },
  {
    profileimage: 'images/amanda.png',
    name: 'Amanda Johnstone',
    description1: 'Her inspiring approach to the intersection of emotion, empathy, vulnerability and technology make her an exceptional leader and a captivating evangelist for the positive change toward mental wellbeing for all.',
    description2: 'There is no other woman on the planet like Amanda Johnstone. She invents technologies to improve the human condition. TIME awarded her as a Next Generation Leader. The CEO Magazine honored her as the Startup Executive of the Year. WIRED named her one of the Top 200 Influencers on Social Audio and she has been recognised by GSMA and Singularity University',
  },
  {
    profileimage: 'images/gerrie.png',
    name: 'Gerrie Smits',
    description1: 'Gerrie is a seasoned professional with 25 years of experience in industries disrupted by the internet.',
    description2: 'Gerrie is a versatile professional with a background in music, television, and civil service. He has over 25 years of experience in industries that have been disrupted by the internet and is an expert in dealing with the impact of digital disruption'

  },
  {
    profileimage: 'images/avery.png',
    name: 'Avery Akkineni',
    description1: 'Avery Akkineni: President of Vayner NFT, Former Head of VaynerMedia APAC and Managing Director.',
    description2: 'Avery serves as the President of Vayner NFT. She leads the company mission to build long-term strategic NFT projects for the world leading intellectual property owners serving brands, celebrities and athletes.',
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
