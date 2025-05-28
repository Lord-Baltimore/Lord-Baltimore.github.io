document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.spin');

  // Spin the cat
  const spinAnim = img.animate(
    [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ],
    {
      duration: 5000,
      iterations: Infinity,
      easing: 'linear',
      playbackRate: 1
    }
  );

  // Reverse rotation
  img.addEventListener('click', () => {
    spinAnim.playbackRate *= -1;
  });
});