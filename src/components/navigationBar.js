import TaskLogo from '../static/card-checklist.svg'
import HomeLogo from '../static/house-door.svg'
import TitleLogo from '../static/title.svg'
import TaskPadLogo from '../static/journal-text.svg'
import { Link } from 'react-router-dom'

const NavigationBar = () => {

    return (
        <nav className="nav-bar">
            <Link to={'/'}><img src={TitleLogo} alt="home"/></Link>
            <Link to={'/taskpad'}><img src={TaskPadLogo} alt="task pad" /></Link>
            <Link to={'/tasks'}><img src={HomeLogo} alt="home" /></Link>
            <Link to={'/tasks'}><img src={TaskLogo} alt="tasks"/></Link>
        </nav>
    )
}

export default NavigationBar;