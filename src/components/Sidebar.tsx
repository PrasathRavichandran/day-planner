import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faList, faChartLine, faCog } from '@fortawesome/free-solid-svg-icons';

import './component.style.scss';

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="brand">
                <FontAwesomeIcon icon={faDiscourse} className="brand-icon" />
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <a href="/" className="menu-link active">
                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link">
                        <FontAwesomeIcon icon={faList} className="icon" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link">
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                    </a>
                </li>
                <li className="menu-item">
                    <a href="/" className="menu-link">
                        <FontAwesomeIcon icon={faCog} className="icon" />
                    </a>
                </li>
            </ul>
            <div className="timer">
                <h3>11:00</h3>
                <p>Nov 12</p>
            </div>
        </section>
    )
}

export default Sidebar;