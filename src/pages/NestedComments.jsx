import React from 'react';
import useComments from '../components/useComments';
import Comment from '../components/Comment'

const initialComments = [
    {
        id: 1,
        username: 'Mateshwari',
        display: 'This is the first comment! Love this post!',
        timestamp: Date.now() - 10000, // 10 seconds ago
        children: [
            {
                id: 2,
                username: 'Bob',
                display: 'Replying to Mateshwari: I agree! It’s very insightful.',
                timestamp: Date.now() - 5000, // 5 seconds ago
                children: [
                    {
                        id: 3,
                        username: 'Charlie',
                        display: 'Reply to Bob: Yes, totally agree!',
                        timestamp: Date.now() - 2000, // 2 seconds ago
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        username: 'David',
        display: 'Great insights here. Thanks for sharing!',
        timestamp: Date.now() - 20000, // 20 seconds ago
        children: [],
    },
    {
        id: 5,
        username: 'Eva',
        display: 'Could you elaborate more on the topic?',
        timestamp: Date.now() - 30000, // 30 seconds ago
        children: [
            {
                id: 6,
                username: 'Frank',
                display: 'Reply to Eva: I’d love to see more details too!',
                timestamp: Date.now() - 15000, // 15 seconds ago
                children: [],
            },
            {
                id: 7,
                username: 'Grace',
                display: 'Reply to Eva: Perhaps in a follow-up article?',
                timestamp: Date.now() - 10000, // 10 seconds ago
                children: [],
            },
        ],
    },
];

function CommentApp() {
    const {
        comments,
        input,
        handleInputChange,
        handleNewComment,
        addReply,
        editComment,
        deleteComment,
    } = useComments(initialComments);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Write a comment..."
                />
            </div>
            <div className="mb-4">
                <button
                    onClick={handleNewComment}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                >
                    Add Comment
                </button>
            </div>
            <div>
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        addReply={addReply}
                        editComment={editComment}
                        deleteComment={deleteComment}
                    />
                ))}
            </div>
        </div>
    );
}

export default CommentApp;
