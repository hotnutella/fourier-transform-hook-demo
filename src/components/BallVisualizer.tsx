import React from 'react';
import styles from './BallVisualizer.module.css';
import BallContainer from './BallContainer';
import Ball from './Ball';

interface BallVisualizerProps {
    frequency: number;
}

const BallVisualizer: React.FC<BallVisualizerProps> = ({ frequency }) => {
    return (
        <div className={styles.visualizer}>
            <BallContainer>
                <Ball frequency={frequency} />
            </BallContainer>
        </div>
    )
}

export default BallVisualizer;