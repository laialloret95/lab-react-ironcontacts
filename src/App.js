import './App.css';
import contactsDB from "./contacts.json";
import { Component } from 'react';

const first5contacts = contactsDB.slice(0, 5);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: first5contacts
    }
  }

  addRandomContact = () => {
    const rndContact =  contactsDB[Math.floor(Math.random() * (contactsDB.length - 6 + 1)) + 6];
    const contactList = [rndContact, ...this.state.contacts];

    this.setState({
      contacts: contactList
    })
  }

  sortByName = () => {
    const contactList = [...this.state.contacts];

    contactList.sort((a,b) => { 
      return a.name.localeCompare(b.name) 
    });

    this.setState({
      contacts: contactList
    })
  }

  sortByPopularity = () => {
    const contactList = [...this.state.contacts];
    
    contactList.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)

    this.setState({
      contacts: contactList
    })
  }

  deleteContact = (ID) => {
    const contactIndex = this.state.contacts.findIndex(contact => contact.id === ID )
    console.log(contactIndex);

    const contactList = [...this.state.contacts]

    contactList.splice(contactIndex, 1)

    this.setState({
      contacts: contactList
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandomContact}> Add Random Contact </button>
        <button onClick={this.sortByName}> Sort By Name </button>
        <button onClick={this.sortByPopularity}> Sort By Popularity </button>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Popularity</th>
              <th>Action </th>
            </tr>
                { this.state.contacts.map((contact, index) => {
                    return (
                      <tr key={index}>
                        <td> <img src={contact.pictureUrl} alt="profile-pic"/> </td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td> 
                          <button onClick={() => this.deleteContact(contact.id)}>
                            Delete
                          </button> 
                        </td>
                      </tr>
                    )
                  })
                }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
