import BodyApp from './components/BodyApp';
import FormsApp from './components/FormsApp';
import Header from './components/Header'


function App() {
  let myString = 'Caption';
  const constString = 'Caption for you';
  let myStr = 'ddd';
  let name = 'Ernest';
  let surname = 'Crackers';
  let age = 18;
  const war = true;

  return (
    <div className='container'>
      <h1>Hello from my react app.</h1>
      <Header />
      <BodyApp />
      <FormsApp />
      <h2>My name is {name} {surname}. I'm {age} years old.</h2>
      <p>This is my next text hehe {war ? 'Yes': 'No'}</p>
      
    </div>
  );
}

export default App;
