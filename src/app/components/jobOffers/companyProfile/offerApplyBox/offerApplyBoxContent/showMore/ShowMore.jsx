import React, { Fragment, useState } from 'react'
import Checkbox from '../../../../../additions/Checkbox'

const ShowMore = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <Fragment>
            <div className='showMoreBox'>
                <Checkbox
                    paragraph={'Processing data in future recruitment'}
                    className="newBox"
                    inputClass="newBoxInput"
                />
                <h3 className="showMore" onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'less' : 'more'}
                </h3>
            </div>
            <div className={showMore ? 'applyAgree' : 'display-none'}>
                Wyrażam zgodę na przetwarzanie moich danych osobowych dla celów
                przyszłych rekrutacji.
            </div>
        </Fragment>
    )
}

export default ShowMore
