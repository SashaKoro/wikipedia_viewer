import React, {Component} from 'react';
import {connect} from 'react-redux';


class SearchOutput extends Component {


  showResults(data) {
    if(!data[0]) {
      return <tr></tr>
    }

    return (
      <tr>
        <tr>
         <th><a href={data[3][0]}>{data[1][0]}</a></th>
          <td>{data[2][0]}</td>
        </tr>
        <tr>
          <th><a href={data[3][1]}>{data[1][1]}</a></th>
          <td>{data[2][1]}</td>
        </tr>
        <tr>
          <th><a href={data[3][2]}>{data[1][2]}</a></th>
          <td>{data[2][2]}</td>
        </tr>
      </tr>

    );
  }


  render(){
    return(
      <table className="SearchOutput table table-hover">
        <thead>
          {this.showResults(this.props.search)}
        </thead>
      </table>
    );
  }
}

function mapStateToProps({ search }) {
  return { search };
}

export default connect(mapStateToProps)(SearchOutput);
