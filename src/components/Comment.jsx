import React, { useState, useRef } from 'react';
import { FaReply, FaEdit, FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Comment({ comment, addReply, editComment, deleteComment, level = 0, maxLevel = 1 }) {
    const [replyText, setReplyText] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.display);
    const [collapsed, setCollapsed] = useState(level >= maxLevel);

    const inputRef = useRef(null);

    const handleReply = () => {
        setShowReplyBox(true);
        setTimeout(() => inputRef.current.focus(), 0);
    };

    const handleCancelReply = () => {
        setShowReplyBox(false);
    };

    const handleReplySave = (commentId) => {
        if (replyText.trim()) {
            addReply(commentId, replyText);
            setShowReplyBox(false);
            setReplyText('');
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = (commentId) => {
        editComment(commentId, editedText);
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(comment.display);
    };

    const handleDelete = (commentId) => {
        deleteComment(commentId);
    };

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`p-4 border-b ${level > 0 ? 'ml-6' : 'ml-0'} bg-gray-50`}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-gray-300">
                    {comment.username[0]}
                  </div>
                </div>
                <div className="flex-1">
                    {isEditing ? (
                        <div className="flex items-center space-x-2">
                            <input
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                            <button
                                className="bg-green-500 text-white px-3 py-1 rounded-lg"
                                onClick={() => handleSaveEdit(comment.id)}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 text-white px-3 py-1 rounded-lg"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p className="font-semibold">{comment.username}</p>
                            <p className="text-gray-700">{comment.display}</p>
                            <p className="text-gray-400">{new Date(comment.timestamp).toLocaleTimeString()}</p>
                            <div className="flex space-x-2 mt-2">
                                <button className="text-blue-500" onClick={handleReply}>
                                    <FaReply /> 
                                </button>
                                <button className="text-yellow-500" onClick={handleEdit}>
                                    <FaEdit /> 
                                </button>
                                <button className="text-red-500" onClick={() => handleDelete(comment.id)}>
                                    <FaTrash /> 
                                </button>
                            </div>
                        </div>
                    )}

                    {showReplyBox && (
                        <div className="mt-2">
                            <input
                                ref={inputRef}
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Write a reply..."
                            />
                            <div className="mt-2">
                                <button
                                    className="bg-indigo-500 text-white px-4 py-1 rounded-lg"
                                    onClick={() => handleReplySave(comment.id)}
                                >
                                    Reply
                                </button>
                                <button
                                    className="bg-gray-500 text-white px-4 py-1 rounded-lg"
                                    onClick={handleCancelReply}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {comment.children.length > 0 && (
                        <div className="mt-3">
                            <button
                                className="text-sm text-indigo-500 flex items-center"
                                onClick={toggleCollapse}
                            >
                                {collapsed ? <FaChevronDown /> : <FaChevronUp />}
                                <span className="ml-1">{collapsed ? 'Show Replies' : 'Hide Replies'}</span>
                            </button>

                            {!collapsed && (
                                <div className="mt-2">
                                    {comment.children.map((child) => (
                                        <Comment
                                            key={child.id}
                                            comment={child}
                                            addReply={addReply}
                                            editComment={editComment}
                                            deleteComment={deleteComment}
                                            level={level + 1}
                                            maxLevel={maxLevel}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Comment;
