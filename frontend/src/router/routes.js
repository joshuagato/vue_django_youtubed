import ListVideos from '../components/Homepage/ListVideos/ListVideos';
import WatchVideos from '../components/Homepage/WatchVideos/WatchVideos';

export const routes = [
  { path: '/', name: 'listvideos', component: ListVideos },
  { path: '/watch-videos', name: 'watchvideos', component: WatchVideos }
];