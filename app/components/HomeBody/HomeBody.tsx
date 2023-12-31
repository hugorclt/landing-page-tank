import Annonce from "./Annonce/Annonce";
import Candidates from "./Candidates/Candidates";
import Customer from "./Customers/Customer";
import FindPeople from "./FindPeople/FindPeople";
import Person from "./Person/Person";
import Simplify from "./Simplify/Simplify";
import Solutions from "./Solutions/Solutions";
import styles from "./page.module.css";

export default function HomeBody() {
  return (
    <section className={styles.homeBodyContainer}>
      <Candidates />
      <div className={styles.findWrapper}>
        <FindPeople />
        <Customer />
      </div>
      <Simplify />
      <Solutions />
      <Person />
      <Annonce />

    </section>
  );
}
