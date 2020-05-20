import React, { useState } from 'react'
import Replies from './replies/Replies';
import { userReplies } from '../../../../../constans'

const RepliesBox = ({ isDay, preferences }) => {
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
        <div className={isDay && preferences ? 'replies' : preferences === false
            && isDay ? 'repliesMore replies' : isDay === false && preferences ? 'replies repliesMore repliesNightMode' : 'replies'}>
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
