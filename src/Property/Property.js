import React, { Fragment } from 'react'
import styles from '../London/London.module.css';
import data4 from '../London/Londondata.json';
import data3 from '../Paris/Parisdata.json'
import data2 from '../Mumbai/Mumbaidata.json'
import data1 from '../NewYork/NewYorkdata.json'
import { GrLocation } from 'react-icons/gr';
import { MdOutlineBedroomChild } from 'react-icons/md';
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { GiMultiDirections } from 'react-icons/gi';
import { useParams } from 'react-router';

export function Property() {
    const { id } = useParams();
    const number1data = data1.itemsnumbernew.find(item => item.id === parseInt(id));
    const number2data = data2.itemsnumbermumbai.find(item => item.id === parseInt(id));
    const number3data = data3.itemsnumberparis.find(item => item.id === parseInt(id));
    const number4data = data4.itemsnumberlondon.find(item => item.id === parseInt(id));

    return (
        <Fragment>
            <div className={styles.main_page1}>
                <div className={styles.sub_page1} key={number1data.id}>
                    <img src={number1data.car_image} alt="" />
                    <p><GrLocation />{number1data.location}</p>
                    <h4>{number1data.location_name}</h4>

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
                        <p>{number1data.car_price}</p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className={styles.sub_page1} key={number2data.id}>
                    <img src={number2data.car_image} alt="" />
                    <p><GrLocation />{number2data.location}</p>
                    <h4>{number2data.location_name}</h4>

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
                        <p>{number2data.car_price}</p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className={styles.sub_page1} key={number3data.id}>
                    <img src={number3data.car_image} alt="" />
                    <p><GrLocation />{number3data.location}</p>
                    <h4>{number3data.location_name}</h4>

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
                        <p>{number3data.car_price}</p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className={styles.sub_page1} key={number4data.id}>
                    <img src={number4data.car_image} alt="" />
                    <p><GrLocation />{number4data.location}</p>
                    <h4>{number4data.location_name}</h4>

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
                        <p>{number4data.car_price}</p>
                        <button>Read More</button>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}
