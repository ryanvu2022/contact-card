import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://i.pinimg.com/736x/f3/3c/c0/f33cc07fa0044261d61a6645a67ef496.jpg" />
      {contacts.map((contact) => {
        return <Card 
          key={contact.id}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      })}
    </div>
  )
}

export default App;
