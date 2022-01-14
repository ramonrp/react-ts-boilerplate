import styles from "./mystyles.module.scss";
import logo from "./public/logo_1.png";

export const App = () => {
  console.log(process.env.API_BASE);
  return (
    <>
      <h1>Hello React and TS</h1>
      <div className={styles.redBackground}>RD</div>
      <div id="img-container">
        <img src={logo}></img>
      </div>
      ;
    </>
  );
};
