import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Page extends Component {
  render() {
    return (
      <div >
      <Link to="/">home</Link>
        <p >
          To get stdfgdfgarted, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Page;
