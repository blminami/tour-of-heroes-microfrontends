import reactLogo from '../assets/react.png';
import styles from './app.module.css';

export function App() {
  return (
    <>
      <img src={reactLogo} alt="Logo" />
      <div className={styles['container']}>
        Welcome to calendar-app. To be coded :)
      </div>
    </>
  );
}

export default App;
