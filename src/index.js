import React, {
    Component
} from 'React';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDWjxHJvmrP45RoodSPjeZ7KPxIwIDDZHo';





class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null
      };

        console.log(this.state);
        YTSearch({key: API_KEY, term: 'star wars'}, (videos) => {
              this.setState({
                videos: videos,
                selectedVideo: videos[0]
              });
        });
}
    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video ={this.state.selectedVideo} />
            <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos}/>
            </div>
          )
    }
}
ReactDOM.render( < App / > , document.querySelector('.container'));
