import React, { Fragment } from 'react'

const Recomended = ({ type, pl }) => {
    return (
        <Fragment>
            {type === 'Premium' && (
                <div className="recomendedText">
                    {pl ? 'Najczęściej wybierany' : 'Recommended'}
                </div>
            )}
        </Fragment>
    )
}

export default Recomended
