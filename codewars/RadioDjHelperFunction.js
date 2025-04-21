function longestPossible(maxLength) {
  const validSongs = songs.filter(song => {
    const [minutes, seconds] = song.playback.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return totalSeconds <= maxLength;
  });
  if(validSongs.length === 0) return false

  let longestSong = validSongs[0];
  let maxTime = getTimeInSeconds(longestSong.playback);

  for(let i = 1; i < validSongs.length; i++) {
    const currentTime = getTimeInSeconds(validSongs[i].playback);
    if(currentTime > maxTime){
        maxTime = currentTime;
        longestSong = validSongs[i];
    }
  }
  return longestSong.title;
}

console.log(longestPossible())
