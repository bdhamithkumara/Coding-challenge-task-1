import './App.css';
import { Cmntinsert } from './components';
import { comments } from './components/data/data';

function App() {
  return (
    <>
    <Cmntinsert comments={comments}/>
    </>
  );
}

export default App;
