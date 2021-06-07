import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

const first5contacts = contacts.slice(0, 5);

const App = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Picture</th>
          <th>Popularity</th>
        </tr>
            { first5contacts.map((contact) => {
                return (
                  <tr>
                    <td> <img src={contact.pictureUrl} alt="profile-pic"/> </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                  </tr>
                )
              })
            }
      </table>
    </div>
  );
}

export default App;
