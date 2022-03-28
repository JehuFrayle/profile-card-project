const API = 'https://randomuser.me/api';

const profilePicture = document.getElementById('profilePicture');
const profileName = document.getElementById('name');
const profileLocation = document.getElementById('location');
const profileFollowers = document.getElementById('followers');
const profileLikes = document.getElementById('likes');
const profilePhotos = document.getElementById('photos');

async function fetchData(api) {
    const data = await (await fetch(api)).json();
    const persona = data.results[0];
    profileName.innerHTML = `${persona.name.first} ${persona.name.last} <span>${persona.dob.age}<span/>`;
    profilePicture.src = persona.picture.large;
    profileLocation.innerHTML = persona.location.country;
}
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
const mediaData = () => {
    profileFollowers.innerHTML = `${getRandom(10,250)}K`;
    profileLikes.innerHTML = `${getRandom(90, 975)}K`;
    profilePhotos.innerHTML = `${getRandom(100,1501)}`;
}
const fakeData = () => {
    fetchData(API);
    mediaData();
}
fakeData();