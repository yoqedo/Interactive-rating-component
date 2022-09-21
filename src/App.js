import './App.css';
import React from 'react'
import Card from './compents/Card'
import Thanks from './compents/Thanks';


function App() {

  const [isSubmited, setIsSubmited] = React.useState(false)
  const [isSelected, setIsSelected] = React.useState('')

  function btnOnClick(num) {
    setIsSelected(num)
  }


  function submitted() {
    setIsSubmited(prev => !prev)
  }

  return (
    <div className="App">
      {isSubmited ? <Thanks handleClick={submitted} number={isSelected} /> : <Card handleClick={submitted} btnClick={btnOnClick} />}
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/yoqedo/Interactive-rating-component">Yoqedo</a>.
      </div>
    </div>
  );
}

export default App;
