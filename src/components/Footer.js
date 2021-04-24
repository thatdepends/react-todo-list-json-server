import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright Gremlins &copy; 1983</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
