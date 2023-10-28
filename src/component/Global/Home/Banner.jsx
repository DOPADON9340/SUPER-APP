import styles from "./Banner>module.css";
import BackgroundImage from "../../assets/image 13.png";
const Banner =()=> {
    return (
    <>
    <div className={styles.button}>
        <p>Discover new things on SuperApp</p>
    </div>
    <img src={Backgroundimage}/>       
   </>
    );
};

export default Banner;

