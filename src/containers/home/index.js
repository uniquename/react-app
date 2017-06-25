import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux';



const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: 'APPLY_TAG_FILTER', tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: 'HOME_PAGE_LOADED', tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: 'HOME_PAGE_UNLOADED' })
});



class Home extends Component {

  goto(){

    //store.dispatch(push('/foo'))

  }



  render() {
    return (
      <div >

      <button onClick={this.goto}>
        Activate Lasers
      </button>


      <Link to="/page">About</Link>
        <p >
          To get stdfgdfgarted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);


