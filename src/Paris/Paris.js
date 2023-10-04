import React, { Fragment, useState } from 'react'
import styles from './Paris.module.css'
import data3 from './Parisdata.json'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { BiBed } from 'react-icons/bi'
import { BiBath } from 'react-icons/bi'
import { GiMultiDirections } from 'react-icons/gi'
import { MdOutlineDownloading } from 'react-icons/md'
import { useNavigate } from 'react-router'

export function Paris() {
    const [count, setCount] = useState(6);
    const navigateToProperty = useNavigate();

    function handleDataClick() {
        setCount(count + 6)
    }

    function handleNavigateProperty(itemId) {
        navigateToProperty(`/property/${itemId}`);
    }

    return (
        <Fragment>
            <div className={styles.main_page1}>
                {
                    data3.itemsnumberparis.slice(0, count).map(items => (
                        <div onClick={() => handleNavigateProperty(items.id)} className={styles.sub_page1} key={items.id}>
                            <img src={items.car_image} alt="" />
                            <p><GrLocation />{items.location}</p>
                            <h4>{items.location_name}</h4>

                            <div className={styles.car_types}>
                                <p><MdOutlineBedroomChild /></p>
                                <p><BiBed /></p>
                                <p><BiBath /></p>
                                <p><GiMultiDirections /></p>
                            </div>
                            <div className={styles.car_num}>
                                <p>3 Room</p>
                                <p>4 Bed</p>
                                <p>1 Bath</p>
                                <p>732 sft</p>
                            </div>

                            <div className={styles.car_prices}>
                                <p>{items.car_price}</p>

                                <button>Read More</button>

                            </div>
                        </div>
                    ))
                }
            </div>
            {count < data3.itemsnumberparis.length && (
                <div className={styles.btn1}>
                    <button onClick={handleDataClick}><MdOutlineDownloading />Show More</button>
                </div>
            )}
        </Fragment>
    )
}
