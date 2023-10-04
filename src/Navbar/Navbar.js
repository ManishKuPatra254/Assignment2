import React, { Fragment } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
export function Navbar() {
    return (
        <Fragment>
            <h1 className={styles.head1}>Featured Listed Property</h1>
            <p className={styles.para1}>Real estate can be bought, sold, leased or rented and can be a valuable investment opportunity . The value of real estate can be ..</p>
            <div className={styles.main_nav}>
                <Link to={'/'}><button>New York</button></Link>
                <Link to={'/mumbai'}><button>Mumbai</button></Link>
                <Link to={'/paris'}><button>Paris</button></Link>
                <Link to={'/london'}><button>London</button></Link>
            </div>
        </Fragment>
    )
}
