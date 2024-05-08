import styles from "./Error.module.css"
import { useNavigate } from "react-router-dom"

function Error() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.bottom}>
                        <p>Houston, we have a problem! </p>
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

