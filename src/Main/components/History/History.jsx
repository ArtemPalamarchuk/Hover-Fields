import React, { useEffect } from 'react';
import StyledHistory from './StyledHistory';

const History = ({history, scrollRef}) => {

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight)
  }, [history])

  return (
    <StyledHistory>
      <h2 className={'label'}>{'History'}</h2>

      {history.length > 0 &&
      <div ref={scrollRef} className={'history'}>
        {history.map((el, i) =>
          <div className={'message-wrap'} key={`${el + i}`}>
            <p className={'message'}>{el}</p>
          </div>)}
      </div>
      }
    </StyledHistory>)

}

export default History;