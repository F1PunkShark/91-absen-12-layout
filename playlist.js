document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.getElementById('next-track-button');
  const audio = document.getElementById('background-audio');

  if (!nextButton || !audio) return;

  const playlist = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  ];

  let currentTrack = 0;

  audio.src = playlist[currentTrack];
  audio.volume = 0.35;

  nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    audio.src = playlist[currentTrack];
    audio.play().catch(() => {});
  });
});
