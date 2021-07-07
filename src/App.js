import './App.css';

function Header(props) {
  return <h2>Welcome to the {props.companyName} Incubator</h2>
}

function Footer(props) {
  return <p> Ending the paragraph here {props.message}</p>
}

function App() {
  let name = 'David'
  let company = 'LenderClose Inc.'
  let companymessage = 'Thanks for visiting our site'
  return (
    <div>
      <Header id="main-header" className="header-class" companyName={company}></Header>
      <p>My name is {name}</p>
      <p>I work at {company}</p>
      <Footer message={companymessage}></Footer>
    </div>
  );
}

export default App;
