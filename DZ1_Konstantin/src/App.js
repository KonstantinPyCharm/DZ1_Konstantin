import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage';
import List from "./components/list/List";
import Button from "./components/button/Button";


function App() {


    const [ show, setShow ] = useState(false);

    const [ input, setInput ] = useState('');

    console.log(input, 'input');
    const handleShow = () => setShow(!show);

    const onChangeInput = (event) => {
    setInput(event.target.value);

};

const localTasks = [

    {
        id: 1,
        task: 'coding',
    },

    {
        id: 2,
        task: 'eat',
    },
    {
        id: 3,
        task: 'sleep',
    },
];


    const buttonClick = () => {
        console.log(`Ты нажал на кнопку!!`);
  };


  return (
      <div>
          <CountPage/>
            <User name={'Bakyt'} age={18}/>
          <h1>{input}</h1>
      <Input placeholder={'name'} type={'text'} onChangeInput={onChangeInput}/>

      {
        show && <Modal handleShow={handleShow}>
          <h1>Content</h1>
        </Modal>
      }
      <button onClick={handleShow}>открыть</button>
      <List tasks={localTasks} />
      <Button onClick={buttonClick}>Жми</Button>
      </div>
  );
}


export default App;
