import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchList from './SearchList';


class SearchOutput extends Component {


  render(){
    return(
      <table className="SearchOutput table table-hover">
        <SearchList results={this.props.search} />
      </table>
    );
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(SearchOutput);
