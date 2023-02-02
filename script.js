console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Passori", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "BT HO GAYI", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "GANG WALE MUNDE", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "JADUGAR", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "RIHAAYI", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "COWBOY", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "GLITCH", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "RAM RAM", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "BADMOS CHORA", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "BHOJ", filePath: "10.mp3", coverPath: "10.jpg"},
    {songName: "Mileya Ni Mae", filsePath: "11.mp3", coverPath: "11.jpg"},
    {songName: "Chehre", filePath: "12.mp3", coverPath: "12.jpg"},
    {songName: "2 Woofer", filePath: "13.mp3", coverPath: "13.jpg"},
    {songName: "101", filePath: "14.mp3", coverPath: "14.jpg"},
    {songName: "Pahado Ki Aur", filePath: "15.mp3", coverPath: "15.jpeg"},
    {songName: "Sapne", filePath: "16.mp3", coverPath: "16.jpeg"},
    {songName: "Sexy Lag Raha Tha", filePath: "17.mp3", coverPath: "17.jpeg"},
    {songName: "Dubai Ka Sheikh", filePath: "18.mp3", coverPath: "18.jpg"},
    {songName: "Chhore NCR aale", filePath: "19.mp3", coverPath: "19.jpg"},
    {songName: "Johny Johny Yes Papa", filePath: "20.mp3", coverPath: "20.jpeg"},
    {songName: "Badi Problem", filePath: "21.mp3", coverPath: "21.jpeg"},
    {songName: "Up Se", filePath: "22.mp3", coverPath: "22.jpeg"},
    {songName: "Chhota Don", filePath: "23.mp3", coverPath: "23.jpeg"},
    {songName: "Chill Kinda Guy", filePath: "24.mp3", coverPath: "24.jpeg"},
    {songName: "Ek Tha Kauvva", filePath: "25.mp3", coverPath: "25.jpeg"},
    {songName: "Itni Shakti ", filePath: "26.mp3", coverPath: "26.jpeg"},  
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
        audioElement.src = `${songIndex+1}.mp3`;
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
    audioElement.src = `${songIndex+1}.mp3`;
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
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

