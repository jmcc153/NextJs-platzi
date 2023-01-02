import Navbar from "../Navbar/Navbar"
import styles from '../../styles/style.module.scss'
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Navbar/>
        {children}
        <footer>This is the footer</footer>
{/*         <style jsx>{`
            footer {
                background-color: green;
            }
        `}</style> {/* Otra forma de styles dada por next js */}
    </div>
  )
}

export default Layout