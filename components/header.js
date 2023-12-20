import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'
const Header = () => (
  <header>
    <Container>
      <div className={styles.flexContainer}>
        <Logo />
        <Nav />
      </div>
    </Container>
  </header>
)

export default Header
