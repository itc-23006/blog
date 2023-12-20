import styles from 'styles/two-column.module.css'

export function TwoColumn ({ children }) {
  let mainClassName = styles.main

  const condition = true

  if (condition) {
    mainClassName = styles.otherMainClassName
  }

  return <div className={mainClassName}>{children}</div>
}
