import { useEffect, useState } from 'react'
import './App.css'
import getUi from './getUi'
import Alert from './Alert';


function App() {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isAlertShow, setIsAlertShow] = useState(false);
  const clickHandler = () => {
    setIsAlertShow(!isAlertShow);
  }

  useEffect(() => {
    isAlertShow === false && setIsBtnClicked(false);
  }, [isAlertShow])

  return <div className='App'>
    {isAlertShow && <Alert setIsAlertShow={setIsAlertShow} />}
    {getUi(isBtnClicked, setIsBtnClicked, clickHandler)}
  </div>
}

export default App
