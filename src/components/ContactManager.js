import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

export default function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  return (
    <div>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  );
} 