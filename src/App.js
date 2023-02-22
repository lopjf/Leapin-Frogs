import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './NavBar';
import Footer from './Footer';

function App() {
  const [accounts, setAccounts] = useState([]); // useState is a type of hook. It enables react to render the right elements and components when 'accounts' and 'setAccounts' get updated
  
  async function connectAccount() {
		if (window.ethereum) {	// when using Metamask, it injects the app with window.ethereum. So this checks if that exist, if so it...
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",		// that gives us all the accounts that exist in the metamask wallet
			});
			setAccounts(accounts);	// this update the State in App.js
		}
	}

  const isConnected = Boolean(accounts[0]);	// account[0] is the address of the wallet. This detect when we are connected versus when we are not connected

  return (
    <div>
      <Navbar connectAccount={connectAccount} isConnected={isConnected}></Navbar>
      <Home connectAccount={connectAccount} isConnected={isConnected}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;


/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */