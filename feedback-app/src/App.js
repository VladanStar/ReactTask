import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import './App.css';

function App() {
  return (
    <>
      <Header bgColor="red" textColor='blue' text="Vladan Cupric"/>
      <div className="container">
      <FeedbackItem />
      </div>
   
    </>
  );
}

export default App;
