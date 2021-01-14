import { notes } from './helpers';
import Ocatave from './Octave';

function App() {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value)
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  }

  return (
    <div>
      <Ocatave notes={notes} clickHandler={handleClick}></Ocatave>
    </div>
  );
}

export default App;
