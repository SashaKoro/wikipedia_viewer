import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchWikipedia } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event){
    event.preventDefault();
    this.props.SearchWikipedia(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render(){
    return (
      <form onSubmit={this.onSearchSubmit} className="SearchBar input-group">
        <input
          placeholder="Search Wikipedia"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange} />
        <span>
          <button type="submit" className="btn btn-primary">Search</button>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Special:Random" className="btn btn-warning">Random</a>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ SearchWikipedia }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

