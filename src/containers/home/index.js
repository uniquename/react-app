import React, { Component } from 'react';
import { Link } from 'react-router-dom'
//import { push } from 'react-router-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import { Values } from 'redux-form-website-template'
//import SimpleFrom from '../../components/SimpleForm'


import * as TodoActions from '../../actions/TodoActions';

import * as MyActions from '../../actions/MyActions';


class Home extends Component {

  componentWillMount() {
    console.log(this.props);
    //this.props.dispatch(deleteTodo())
  }

  constructor() {
    super();
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
    const { todos, actions } = this.props;

    console.log(actions);

    return (
      <div >

      <ul>
          { this.renderList()  }
      </ul>


      <button onClick={actions.MyActions.myClick}>
        Activate Lasers
      </button>

      <Link to="/page">About</Link>
        <p >
          To get , edit <code>src/App.js</code> and save to reload.
        </p>
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


