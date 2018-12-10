import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    };
    this.handleChange = this.handleChange.bind(this);
  } 
  getGenres() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/movies/genres').then((res) => {
      this.setState({genres:res.data.genres})
    })
    .catch(err => {
      console.log('failed')
    });
  }

  componentDidMount() {
    this.getGenres()
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.handleChange}>
        {  this.state.genres.map((item) => {
           return <option key = {item.id} value = {item.name}>{item.name}</option>
          })}
        </select>
        <br/><br/>

        <button>Search</button>

      </div>
    );
  }
}

export default Search;