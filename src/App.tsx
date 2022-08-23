import {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const noteMap = {
  '8': ['1', 'a', '2', 'a', '3', 'a', '4', 'a'],
  '16': [
    '1',
    'e',
    'A',
    'e',
    '2',
    'e',
    'A',
    'e',
    '3',
    'e',
    'A',
    'e',
    '4',
    'e',
    'A',
    'e',
  ],
};

const Beat = ({label, offBeat}: {label: string; offBeat: boolean}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={['Beat', active && 'active'].filter(Boolean).join(' ')}
      onClick={() => setActive((prev) => !prev)}
    >
      <div className="part">{label}</div>
      <div className="part dir">{offBeat ? 'U' : 'D'}</div>
    </div>
  );
};

function App() {
  const [type, setType] = useState('16');

  return (
    <div className="App">
      <select
        className="select"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
      <div className="Note">
        {noteMap[type].map((label: string, index: number) => (
          <Beat
            label={label}
            key={`${type}${index}`}
            offBeat={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
