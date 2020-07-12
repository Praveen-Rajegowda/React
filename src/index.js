import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";



const App =()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard >
            <CommentDetail
                author="Sam" timeAgo="Today at 6.00 PM" content="Nice Blog Post" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard >
            <CommentDetail author="Alex" timeAgo="Today at 7.00 AM" content="I like this subject" avatar={faker.image.avatar()}/>
            </ApprovalCard >
            <ApprovalCard>
            <CommentDetail author="John" timeAgo="Today at 8.00 PM" content="I like the writing" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));



