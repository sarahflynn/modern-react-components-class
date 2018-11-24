import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          img={faker.image.avatar()}
          text="comment 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          img={faker.image.avatar()}
          text="comment 2"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Taylor"
          timeAgo="Yesterday at 5:45PM"
          img={faker.image.avatar()}
          text="comment 3"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
