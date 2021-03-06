import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (searchTerm) => {
        const response = await unsplash.get('search/photos', {
            params: { query: searchTerm },

        });
        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar submit={this.onSearchSubmit} />
                <div>There are {this.state.images.length} images.</div>
                <ImageList />
            </div>
        );
    };
};

export default App;