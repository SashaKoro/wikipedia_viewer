import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchWikipedia } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
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
      <form onSubmit={this.onSearchSubmit.bind(this)} className="SearchBar input-group">
        <input
          placeholder="Search Wikipedia"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange.bind(this)} />
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

