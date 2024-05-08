// Contests Component
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import styles from './Contests.module.scss';
import axios from 'axios';

function Contests() {
    const [contests, setContests] = useState([]);
    const [filter, setFilter] = useState("All");

    const stylizePlatformName = (platformName) => {
        const stylizedNames = {
            codeforces: "CodeForces",
            topcoder: "TopCoder",
            atcoder: "AtCoder",
            codechef: "CodeChef",
            leetcode: "LeetCode",
            hackerrank: "HackerRank",
            hackerearth: "HackerEarth",
        };

        return stylizedNames[platformName.toLowerCase()] || platformName;
    };

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
                    platformLabel: stylizePlatformName(platformName),
                    contestName: contest.name,
                    url: contest.url,
                    startDate: istDateString.split(', ')[0],
                    startTime: istDateString.split(', ')[1],
                    in_24_hours: contest.in_24_hours,
                    status: contest.status,
                };
            });
            setContests((contests) => [...contests, ...upcomingContests]);
        } catch (error) {
            console.error('Error fetching contests:', error);
        }
    };

    const PLATFORMS = ["All", "codeforces", "topcoder", "atcoder", "codechef", "leetcode", "hackerrank", "hackerearth"];

    useEffect(() => {
        PLATFORMS.slice(1).forEach((platformName) => fetchContests(platformName));
    }, []);

    const filteredContests = filter === "All" ? contests : contests.filter(contest => contest.platformLabel.toLowerCase() === filter.toLowerCase());

    const sortedContests = filteredContests.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return (
        <div className={styles.wrapper}>
            <div className={styles.filter}>
                <label>Filters:</label>
                <select onChange={(e) => setFilter(e.target.value)}>
                    {PLATFORMS.map((platform, index) => (
                        <option key={index} value={platform === "All" ? platform : platform.toLowerCase()}>{platform}</option>
                    ))}
                </select>
            </div>
            {sortedContests.length === 0 ? (
                <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>No contests found.</p>
                </div>
            ) : (
                sortedContests.map((contest, index) => (
                    <Card
                        key={index}
                        platformLabel={contest.platformLabel}
                        contestName={contest.contestName}
                        platformUrl={contest.url}
                        startDate={contest.startDate}
                        startTime={contest.startTime}
                        in_24_hours={contest.in_24_hours}
                        status={contest.status}
                    />
                ))
            )}
        </div>
    );
}

export default Contests;
