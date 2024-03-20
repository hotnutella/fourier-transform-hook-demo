import React, { useEffect, useState } from 'react';
import styles from './Ball.module.css';

interface BallProps {
    frequency: number;
}

const Ball: React.FC<BallProps> = ({ frequency }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const newPosition = mapFrequencyToPosition(frequency);
        setPosition(newPosition);
      }, [frequency]);
    
      const mapFrequencyToPosition = (frequency: number) => {
        if (!frequency) return 0;
        const maxFrequency = 5000;
        const maxPercentageWithinContainer = 89;
        const position = (frequency / maxFrequency) * maxPercentageWithinContainer;
        return Math.min(position, maxPercentageWithinContainer);
      };
    
    return (
        <div className={styles.ball} style={{ bottom: `${position}%` }}></div>
    )
}

export default Ball;