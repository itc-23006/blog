import styles from 'styles/container.module.css'

export default function Container ({ children, large = false }) {
  return (
    <div className={large ? styles.large : styles.default}>
      <h3 className={styles.heading}>Contact</h3>
      <address>cube@web.mailaddress</address>
    </div>
  )
}
