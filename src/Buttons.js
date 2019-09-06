import React from 'react';

function Buttons(props) {
    return(
        <div className="button-container">
            <button
                className="quote-button"
                id="new-quote"
                style={{cursor: "pointer"}}
                onClick={props.getQuote}
            >
            Next Quote
            </button>
            
            <button>
                <a
                style={{textDecoration: "none"}}
                className="twitter-link"
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                >
                Tweet
                </a>
            </button>
        </div>
    )
}

export default Buttons;