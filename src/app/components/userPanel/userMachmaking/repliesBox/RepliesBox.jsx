import React, { useState } from 'react'
import Replies from './replies/Replies';
import { userReplies } from '../../../../../constans'

const RepliesBox = ({ isDay }) => {
    const [active, setActive] = useState(0);

    const renderReplies = () => {
        return (userReplies.map((reply, index) =>
            <Replies
                key={index}
                repId={index}
                text={reply.text}
                side={reply.side}
                toggleActive={() => setActive(index)}
                active={active}
                isDay={isDay}
            />
        ))
    }

    return (
        <div className={isDay ? 'replies' : 'replies repliesNightMode'}>
            <h1>Matchmaking</h1>
            <div className="userMachmaking-options">
                <div className="userMachmaking-status">
                    {renderReplies()}
                </div>
            </div>
        </div>
    )
}

export default RepliesBox
