// Card Component
import styles from '../Card/Card.module.scss';
import { SiLeetcode, SiCodeforces, SiTopcoder, SiCodechef, SiHackerearth } from "react-icons/si";
import { FaHackerrank, FaCode } from "react-icons/fa";

function Card({ platformLabel, contestName, platformUrl, startDate, startTime, in_24_hours, status }) {
    const openNewWindow = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className={styles.wrapper}>
            <div>
                {platformLabel === 'HackerRank' && <FaHackerrank className={styles.icon} />}
                {platformLabel === 'CodeChef' && <SiCodechef className={styles.icon} />}
                {platformLabel === 'HackerEarth' && <SiHackerearth className={styles.icon} />}
                {platformLabel === 'TopCoder' && <SiTopcoder className={styles.icon} />}
                {platformLabel === 'Codeforces' && <SiCodeforces className={styles.icon} />}
                {platformLabel === 'LeetCode' && <SiLeetcode className={styles.icon} />}
                {!['HackerRank', 'CodeChef', 'HackerEarth', 'TopCoder', 'Codeforces', 'LeetCode'].includes(platformLabel) && <FaCode className={styles.icon} />}
                <h5>{platformLabel}</h5>
            </div>
            <div>
                <p>Contest Name: <span className={styles.url} onClick={() => openNewWindow(platformUrl)}>{contestName}</span></p>
                <p>Start Date: <span>{startDate}</span></p>
                {
                    in_24_hours === 'Yes' && status === 'BEFORE' ? (
                        <p>Start Time: <span className={styles.alert}>{startTime}</span></p>
                    ) : (
                        <p>Start Time: <span>{startTime}</span></p>
                    )
                }
            </div>
        </div>
    );
}

export default Card;
