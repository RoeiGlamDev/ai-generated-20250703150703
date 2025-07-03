// Define a VideoGrid class
class VideoGrid {
  constructor() {
    this.element = document.querySelector('.video-grid');
  }

  renderVideoComponents(videoComponents) {
    videoComponents.forEach((component) => {
      this.element.appendChild(component.element);
    });
  }

  addFadeInAnimationToComponents(videoComponents) {
    videoComponents.forEach((component) => {
      component.addFadeInAnimation();
    });
  }
}

export default VideoGrid;
import VideoComponent from './VideoComponent.js';
import VideoGrid from './VideoGrid.js';

// ...

const videoGrid = new VideoGrid();
const videoComponents = videoData.map((video) => new VideoComponent(video));
videoGrid.renderVideoComponents(videoComponents);
videoGrid.addFadeInAnimationToComponents(videoComponents);