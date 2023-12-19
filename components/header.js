import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'
const Header = () => (
  <header>
    <div className={styles.flexContainer}>
      <Logo />
      <Nav />
    </div>
  </header>
)

export default Header
