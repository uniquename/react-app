import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactList from './components/contact-list';

import { Link } from 'react-router-dom'

import ConstactActions from '../../actions/contact-actions';

class Contacts extends Component {

  componentDidMount() {
    this.props.actions.ConstactActions.fetchContacts();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>List of Contacts</h1>
        <Link to="/">Home</Link>
        <ContactList contacts={this.props.contacts} loading={this.props.loading} errors={this.props.errors} deleteContact={this.props.ConstactActions.deleteContact}/>
      </div>
    )
  }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
  return {
      contacts : state.contactStore.contacts,
      loading: state.contactStore.loading,
      errors: state.contactStore.errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ConstactActions: bindActionCreators(ConstactActions, dispatch)
  }
}

export default connect(mapStateToProps, {fetchContacts, deleteContact})(Contacts);
