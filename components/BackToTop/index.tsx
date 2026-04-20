import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'components/Link'
import { useScrolled } from 'hooks/useScrolled'
import styles from './index.module.css'

export const BackToTop = () => {
  const scrolled = useScrolled()

  return (
    <div className={`${styles.iconWrapper} ${scrolled ? styles.iconWrapperScrolled : ''}`}>
      <Link className={styles.iconLink} href="#">
        <FontAwesomeIcon className={styles.icon} icon={faChevronUp} size="3x" />
      </Link>
    </div>
  )
}
