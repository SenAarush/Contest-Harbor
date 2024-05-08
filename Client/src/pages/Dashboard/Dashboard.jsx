import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import styles from './Dashboard.module.scss';
import axios from 'axios';

function Dashboard() {
    const [contests, setContests] = useState([]);

    const fetchContests = async (platformName) => {
        try {
            const response = await axios.get(`http://localhost:3000/contests/${platformName}`);
            const data = response.data;
            const upcomingContests = data.map((contest) => {
                const utcDate = new Date(contest.start_time);
                const istDateString = utcDate.toLocaleString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                });

                return {
                    platform: platformName,
                    contestName: contest.name,
                    url: contest.url,
                    startDate: istDateString.split(', ')[0], // Extracting date part
                    startTime: istDateString.split(', ')[1], // Extracting time part
                    in_24_hours: contest.in_24_hours,
                };
            });
            setContests((contests) => [...contests, ...upcomingContests]);
        } catch (error) {
            console.error('Error fetching contests:', error);
        }
    };

    const PLATFORMS = ["codeforces", "topcoder", "atcoder", "codechef", "leetcode", "hackerrank", "hackerearth"];

    useEffect(() => {
        PLATFORMS.forEach((platformName) => fetchContests(platformName));
    }, []);

    return (
        <div className={styles.wrapper}>
            {contests.map((contest, index) => (
                <Card
                    key={index}
                    platformName={contest.platform}
                    contestName={contest.contestName}
                    platformUrl={contest.url}
                    startDate={contest.startDate}
                    startTime={contest.startTime}
                    in_24_hours={contest.in_24_hours}
                />
            ))}
        </div>
    );
}

export default Dashboard;
