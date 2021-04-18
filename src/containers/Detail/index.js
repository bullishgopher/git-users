import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import Container from 'components/Container';
import Button from 'components/Button';
import Card from 'components/Card';
import Suspense from 'components/Suspense';
import Table from 'components/Table';
import GirlSVG from 'components/NoData';

import styles from './style.module.scss';

function Detail() {
  const history = useHistory();
  const typiData = useSelector((state) => state.Typicode);

  const { loading, data, error } = typiData;
  const { items } = data;

  /**
   *
   */
  const handleBackPress = () => {
    history.goBack();
  };

  return (
    <Container>
      <Card>
        <Button onClick={handleBackPress}>BACK</Button>
        <div className={styles.suspense}>
          <Suspense
            loading={loading}
            error={error}
            fallback={
              <div>
                <PulseLoader color={'#D5333E'} loading size={30} />
              </div>
            }
          >
            {items && items.length > 0 ? <Table data={items} /> : <GirlSVG />}
          </Suspense>
        </div>
      </Card>
    </Container>
  );
}

export default Detail;
