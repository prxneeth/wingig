import React from 'react';
import './statusbar.css';

const RadialProgressBar = ({ progress, imageSrc }) => {
    const radius = 60;
    const strokeWidth = 11;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (progress / 100) * circumference;

    return (
        <div className="radial-progress-wrapper">
            <svg
                className="radial-progress"
                width={radius * 2 + strokeWidth}
                height={radius * 2 + strokeWidth}
            >
                {/* Background Circle */}
                <circle
                    className="radial-progress-bg"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                {/* Progress Bar Circle */}
                <circle
                    className="radial-progress-bar"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={progressOffset}
                />
                {/* Progress Percentage at Fixed Bottom Position */}
                <text
                    x="50%"
                    y={radius * 2 + strokeWidth - 5}
                    className="progress-text"
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    {`${progress}%`}
                </text>
            </svg>
            <div className="profile-picture">
                <img src={imageSrc} alt="Profile" />
            </div>
        </div>
    );
};

export default RadialProgressBar;
