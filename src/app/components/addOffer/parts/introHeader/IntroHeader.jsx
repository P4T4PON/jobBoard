import React from 'react';
import tech from './technology_header.svg';

const IntroHeader = ({ pl }) => {
  return (
    <div className="intro-header">
      <div className="intro-inner">
        <div className="text">
          <p>
            {pl
              ? 'Dzięki nam dotrzesz skutecznie do społeczności ponad 200 tysięcy polskich programistów'
              : 'Thanks to us you will effectively reach the community of over 200,000 Polish developers '}
          </p>
          <img src={tech} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroHeader;
