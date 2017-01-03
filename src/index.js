import React, {
    Component
} from 'React';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDWjxHJvmrP45RoodSPjeZ7KPxIwIDDZHo';





class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
              this.setState({videos});//ES6; equals videos: videos;
        });
    }
    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos}/>
            </div>
          )
    }
}
ReactDOM.render( < App / > , document.querySelector('.container'));
