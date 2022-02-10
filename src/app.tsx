import * as React from 'react';
import styles from './mystyles.module.css';
import logo from './public/logo_1.png';

export const App = () => {
  const [counter, setCounter] = React.useState<number>(0);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  console.log(process.env.EXAMPLE_VARIABLE);
  React.useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <>
      <h1>Hello React and TS With Fast Refresh</h1>
      <button onClick={handleIncrease}>Counter {counter}</button>
      <div className={styles.redBackground}>RED</div>
      <div id="img-container">
        <img src={logo}></img>
      </div>
      ;
    </>
  );
};
