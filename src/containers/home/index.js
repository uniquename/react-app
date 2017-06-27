import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { Values } from 'redux-form-website-template'
//import SimpleFrom from '../../components/SimpleForm'


import * as TodoActions from '../../actions/TodoActions';

import * as MyActions from '../../actions/MyActions';

import MyComponent from '../../components/MyComponent';


class Home extends Component {

/*
  constructor() {
    super();
  }
*/

  componentDidMount() {
    this.props.actions.MyActions.myInitLoader();
  }

  componentWillMount() {
    //this.props.dispatch(deleteTodo())
  }


  goto(){
    //store.dispatch(push('/foo'))
  }

  renderList() {
    return this.props.users.map((user) => {
      return (
        <li
        key={user.id}
        onClick={() => this.props.selectUser(user)}
        >
        {user.first} {user.last}
        </li>
        );
    });
  }


  render() {
    const { actions } = this.props;

    return (
      <div >
        <MyComponent someprop="test" />

        <ul>
        { /*this.renderList() */ }
        </ul>

        <button onClick={actions.MyActions.myClick}>
        Activate Lasers
        </button>
        <div>
        <Link to="/page">Page</Link>
        <Link to="/contacts">Contacts</Link>
        </div>
      </div>
      );
  }
}

function mapState(state) {
  return {
    users: state.users
  };
}

function mapDispatch(dispatch) {
  return {
    actions: {
      MyActions: bindActionCreators(MyActions, dispatch),
      TodoActions: bindActionCreators(TodoActions, dispatch)
    }
  };
}


export default connect(mapState, mapDispatch)(Home);


