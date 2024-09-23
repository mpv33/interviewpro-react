import React, { useState } from 'react';
import Comment from '../components/Comment';

function Comments() {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([
        {
            id: 1,
            username: 'Mateshwari',
            display:  "Hello! I hope you find this helpful!",
            timestamp: Date.now(),
            children: [
              {
                id: 2,
                username: 'Shivani',
                display: 'Great work mateshwari',
                timestamp: Date.now(),
                children: [],
            }
            ],
        },
        {
            id: 3,
            username: 'Shubham',
            display: 'Great content!',
            timestamp: Date.now(),
            children: [],
        },
    ]);

    const newComment = (text) => ({
        id: new Date().getTime(),
        username: 'Random User',
        display: text,
        timestamp: Date.now(),
        children: [],
    });

    const addReply = (commentId, replyText) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    children: [...comment.children, newComment(replyText)],
                };
            }
            return {
                ...comment,
                children: addReplyToChild(comment.children, commentId, replyText),
            };
        });
        setComments(updatedComments);
    };

    const addReplyToChild = (children, parentId, text) => {
        return children.map((child) => {
            if (child.id === parentId) {
                return {
                    ...child,
                    children: [...child.children, newComment(text)],
                };
            }
            return {
                ...child,
                children: addReplyToChild(child.children, parentId, text),
            };
        });
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleNewComment = () => {
        if (input.trim()) {
            setComments([...comments, newComment(input)]);
            setInput('');
        }
    };

    const editComment = (commentId, newText) => {
        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return { ...comment, display: newText };
            }
            return {
                ...comment,
                children: editChildComment(comment.children, commentId, newText),
            };
        });
        setComments(updatedComments);
    };

    const editChildComment = (children, commentId, newText) => {
        return children.map((child) => {
            if (child.id === commentId) {
                return { ...child, display: newText };
            }
            return {
                ...child,
                children: editChildComment(child.children, commentId, newText),
            };
        });
    };

    const deleteComment = (commentId) => {
        const updatedComments = comments
            .filter((comment) => comment.id !== commentId)
            .map((comment) => ({
                ...comment,
                children: deleteChildComment(comment.children, commentId),
            }));
        setComments(updatedComments);
    };

    const deleteChildComment = (children, commentId) => {
        return children
            .filter((child) => child.id !== commentId)
            .map((child) => ({
                ...child,
                children: deleteChildComment(child.children, commentId),
            }));
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <div className="mb-4">
                <input
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    placeholder="Write a comment..."
                    value={input}
                    type="text"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all"
                    onClick={handleNewComment}
                >
                    Comment
                </button>
            </div>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        addReply={addReply}
                        editComment={editComment}
                        deleteComment={deleteComment}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Comments;
