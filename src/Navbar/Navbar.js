import React, { Fragment, useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export function Navbar() {
    const [activeItem, setActiveItem] = useState('newyork');

    const handleNavbarClick = (item) => {
        setActiveItem(item);
    };

    return (
        <Fragment>
            <h1 className={styles.head1}>Featured Listed Property</h1>
            <p className={styles.para1}>Real estate can be bought, sold, leased or rented and can be a valuable investment opportunity . The value of real estate can be ..</p>
            <div className={styles.main_nav}>
                <Link to={'/'} className={activeItem === 'newyork' ? styles.active : ''} onClick={() => handleNavbarClick('newyork')}><button>New York</button></Link>
                <Link to={'/mumbai'} className={activeItem === 'mumbai' ? styles.active : ''} onClick={() => handleNavbarClick('mumbai')}><button>Mumbai</button></Link>
                <Link to={'/paris'} className={activeItem === 'paris' ? styles.active : ''} onClick={() => handleNavbarClick('paris')}><button>Paris</button></Link>
                <Link to={'/london'} className={activeItem === 'london' ? styles.active : ''} onClick={() => handleNavbarClick('london')}><button>London</button></Link>
            </div>
        </Fragment>
    )
}
