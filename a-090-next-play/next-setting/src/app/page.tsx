import styles from '../styles/test.module.scss';
import variables from '../styles/variables.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.testContainer}>test</div>
      <div style={{ color: variables.primaryColor }}>test</div>
    </div>
  );
}
