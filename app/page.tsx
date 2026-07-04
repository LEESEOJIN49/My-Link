import styles from "./page.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <div className={styles.avatarContainer}>
          <div className={styles.avatar}>
            <span>Lee</span>
          </div>
          <div className={styles.statusDot} title="Online"></div>
        </div>

        <h1 className={styles.name}>이 서진</h1>
        <p className={styles.role}>웹소설 신입 PD</p>

        <div className={styles.divider}></div>

        <p className={styles.bio}>
          안녕하세요! 웹소설을 즐겨 읽는 신입 웹소설 PD, 이서진입니다!<br />
          새로운 기술을 배우고 적용하는 것을 즐기는 편으로, 적응력이 빠른 편입니다.<br />
          제게 즐거운 이야기는 독자에게도 즐겁다는 신념으로 열심히 일하겠습니다.
        </p>

        <div className={styles.socials}>
          <a href="#" className={styles.button}>Contact Me</a>
          <a href="#" className={styles.buttonSecondary}>Portfolio</a>
        </div>
      </main>
    </div>
  );
}
