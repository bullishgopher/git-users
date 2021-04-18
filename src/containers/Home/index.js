import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from 'components/Container';
import Button from 'components/Button';
import Card from 'components/Card';
import TextInput from 'components/TextInput';
import actions from 'redux/typicode/actions';

function Home() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const history = useHistory();

  /**
   *
   */
  const handleSend = () => {
    const number = inputRef.current.value;

    dispatch({ type: actions.SET_NUMBER, payload: { number } });

    history.push('/detail');
  };

  return (
    <Container>
      <Card>
        <TextInput inputRef={inputRef} placeholder="Login string here" />
        <Button onClick={handleSend}> SEND </Button>
      </Card>
    </Container>
  );
}

export default Home;
