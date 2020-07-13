import React from 'react';

const CommentDetail = (test) => {


    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ test.avatar }/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {test.author}
                </a>
                <div className="metadata">
                    <span className="date">{ test.timeAgo }</span>
                </div>
                <div className="text">{ test.content }</div>
            </div>
        </div>
    );
};

export default CommentDetail;