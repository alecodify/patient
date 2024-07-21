import React from 'react';
import "../styles/setting.scss";

const SettingCard = ({ icon, numbers, status, bgColor }) => {
    return (
        <li>
            <div className={`setting-card-icon`} style={{ backgroundColor: `${bgColor}` }}>{icon}</div>
            <span className="setting-card-info">
                <h3>{numbers}</h3>
                <p>{status}</p>
            </span>
        </li>
    )
}

export default SettingCard