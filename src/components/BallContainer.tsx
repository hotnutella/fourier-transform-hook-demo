import React from 'react';
import styles from './BallContainer.module.css';

interface BallContainerProps {
    children: React.ReactNode;
}

const BallContainer: React.FC<BallContainerProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default BallContainer;