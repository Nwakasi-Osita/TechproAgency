import styles from "./Nav.module.scss";


export default function Nav() {
  return (
    <>
    <div className={styles.techproHeaderSection}>
      <div className={styles.techproHeaderLink}>
        <div className={styles.techproTitle}><a href="#"><h4>TechPro Agency</h4></a>
        </div>
        <div className={styles.techproStartUpButton}><a href="#"><p>Let&apos;s work together</p></a></div>
      </div>
      
    </div>
    </>
  );
}
