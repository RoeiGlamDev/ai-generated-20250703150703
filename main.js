// Get the video grid element
const videoGrid = document.querySelector('.video-grid');

// Define a function to render video components
function renderVideoComponent(video) {
  const videoComponent = document.createElement('div');
  videoComponent.classList.add('video-component');
  videoComponent.innerHTML = `
    <h3>${video.title}</h3>
    <p>${video.description}</p>
  `;
  videoGrid.appendChild(videoComponent);
}

// Define a function to fetch video data
function fetchVideoData() {
  // Simulate fetching video data from an API
  const videoData = [
    { title: 'Video 1', description: 'This is video 1' },
    { title: 'Video 2', description: 'This is video 2' },
    { title: 'Video 3', description: 'This is video 3' },
  ];
  return videoData;
}

// Fetch video data and render video components
fetchVideoData().then((videoData) => {
  videoData.forEach((video) => {
    renderVideoComponent(video);
  });
  // Add fade-in animation to video components
  const videoComponents = document.querySelectorAll('.video-component');
  videoComponents.forEach((component) => {
    component.classList.add('fade-in');
  });
});