console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "295", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Amli Talk (Skit)", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Aroma", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "B & W", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bitch I'm Back", filePath: "songs/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "Boo Call (Skit)", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Brown Shortie \n feat. Sonam Bajwa", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Built Different", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Burberry", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "Calaboose", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Celebrity Killer \n feat. Tion Wayne", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chacha Huu (SKit)", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Facts (Skit)", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "GOAT", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "G-Shit feat. \n Blockboi Twitch", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "IDGAF", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Invincible", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Malwa Block", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Me and My Girlfriend", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Moosedrilla feat. \n DIVINE", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Moosetape (Intro)", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Pind Hood Damn Good", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Power", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Racks and Rounds \n feat. Sikander Khalon", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Real One", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Regret", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sidhu Son", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Signed to God", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "These Days", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Trial Day", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ultimatum", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Unfuckwithable", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "US feat. Raja Kumari", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})