import { useState } from 'react';

const useComments = (initialComments) => {
    const [comments, setComments] = useState(initialComments);
    const [input, setInput] = useState('');

    // Helper function to create a new comment
    const newComment = (text) => ({
        id: new Date().getTime(),
        username: 'Random User',
        display: text,
        timestamp: Date.now(),
        children: [],
    });

    // Recursive function to apply updates to nested comments
    const recursiveUpdate = (commentsList, commentId, updateFn) => {
        return commentsList.map((comment) => {
            if (comment.id === commentId) {
                return updateFn(comment);
            }
            return {
                ...comment,
                children: recursiveUpdate(comment.children, commentId, updateFn),
            };
        });
    };

    // Add a reply to a specific comment
    const addReply = (commentId, replyText) => {
        const updatedComments = recursiveUpdate(comments, commentId, (comment) => ({
            ...comment,
            children: [newComment(replyText),...comment.children],
        }));
        setComments(updatedComments);
    };

    // Edit a comment by its ID
    const editComment = (commentId, newText) => {
        const updatedComments = recursiveUpdate(comments, commentId, (comment) => ({
            ...comment,
            display: newText,
        }));
        setComments(updatedComments);
    };

    // Delete a comment by its ID
    const deleteComment = (commentId) => {
        const filterDeleted = (commentsList) =>
            commentsList
                .filter((comment) => comment.id !== commentId)
                .map((comment) => ({
                    ...comment,
                    children: filterDeleted(comment.children),
                }));

        setComments(filterDeleted(comments));
    };

    // Handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // Add a new root-level comment
    const handleNewComment = () => {
        if (input.trim()) {
            setComments([newComment(input),...comments]);
            setInput('');
        }
    };

    return {
        comments,
        input,
        handleInputChange,
        handleNewComment,
        addReply,
        editComment,
        deleteComment,
    };
};

export default useComments;
