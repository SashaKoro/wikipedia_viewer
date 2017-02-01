import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchList from './SearchList';


class SearchOutput extends Component {


  render(){
    return(
      <table className="SearchOutput table table-hover">
        <tbody>
          <SearchList results={this.props.search} />
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(SearchOutput);
