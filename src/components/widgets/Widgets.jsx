import React from 'react';
import './widgets.css';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="Widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is FUN", "Top News - 1456 readers")}
            {newsArticle("Coronavirus: Ontario updates", "Top News - 899 readers")}
            {newsArticle("NHL Finals", "Top News - 558 readers")}
        </div>
    )
}

export default Widgets
