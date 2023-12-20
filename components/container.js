import styles from 'styles/contact.module.css'

export default function Container ({ children, large = false }) {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <address>cube@web.mail.address</address>
    </div>
  )
}
