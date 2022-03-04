import React, { useState } from 'react'
import AddPersonForm from './AddPersonForm'
import PeopleList from './PeopleList'

export default function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  console.log(contacts)

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
} 