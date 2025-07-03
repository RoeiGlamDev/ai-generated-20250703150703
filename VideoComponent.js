// Define a VideoComponent class
class VideoComponent {
  constructor(video) {
    this.video = video;
    this.element = document.createElement('div');
    this.element.classList.add('video-component');
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <h3>${this.video.title}</h3>
      <p>${this.video.description}</p>
    `;
  }

  addFadeInAnimation() {
    this.element.classList.add('fade-in');
  }
}

export default VideoComponent;