import React, { useState } from 'react';

// React app-like folder structure
const folderStructure = [
  {
    name: "public", children: [
      { name: "index.html" }, { name: "favicon.ico" }
    ]
  },
  {
    name: "src", children: [
      { name: "index.js" }, { name: "App.js" },
      {
        name: "components", children: [
          { name: "Header.js" }, { name: "Footer.js" },
          { name: "utils", children: [
              { name: "helpers.js" }, { name: "constants.js" }
            ]
          }
        ]
      },
      { name: "styles", children: [
          { name: "App.css" }, { name: "index.css" }
        ]
      }
    ]
  },
  { name: "package.json" }, { name: "README.md" }, { name: ".gitignore" }
];

// FolderNode Component to handle folders and files
const FolderNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <div className="flex items-center cursor-pointer p-2 hover:bg-gray-200 bg-white rounded-md shadow-md" onClick={() => setIsOpen(!isOpen)}>
        <span className="mr-2">{node.children ? (isOpen ? '📂' : '📁') : '📄'}</span>
        <span>{node.name}</span>
      </div>
      {node.children && isOpen && (
        <div className="pl-6 my-2">
          {node.children.map((child, index) => <FolderNode key={index} node={child} />)}
        </div>
      )}
    </div>
  );
};

// Main App Component
const FileExplorer = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <h1 className="text-xl font-bold mb-4">React App Folder Structure: File Explorer</h1>
      {folderStructure.map((folder, index) => <FolderNode key={index} node={folder} />)}
    </div>
  </div>
);

export default FileExplorer;
