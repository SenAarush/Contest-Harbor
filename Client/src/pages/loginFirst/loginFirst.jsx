import styles from "./loginFirst.module.css"
import { useNavigate } from "react-router-dom"

function loginFirst() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.bottom}>
                        <p>You, have to log in first</p>
                        <span onClick={() => {
                            navigate('/')
                        }}>Liftoff to home🚀</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error

