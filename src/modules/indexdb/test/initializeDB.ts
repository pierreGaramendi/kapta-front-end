// src/initializeDB.ts
import { addData } from './dbOperations';

const sampleData = {
  "users": [
    {
      "_id": "user_001",
      "name": "John Doe",
      "email": "john@example.com",
      "workspaces": ["workspace_001", "workspace_002"]
    },
    {
      "_id": "user_002",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "workspaces": ["workspace_001"]
    },
    {
      "_id": "user_003",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "workspaces": ["workspace_001"]
    }
  ],
  "workspaces": [
    {
      "_id": "workspace_001",
      "name": "Workspace 1",
      "description": "Description for Workspace 1",
      "boards": [
        {
          "_id": "board_001",
          "name": "Project A",
          "description": "Board for Project A",
          "workspace_id": "workspace_001",
          "lists": ["list_001", "list_002"],
          "members": ["user_001", "user_002", "user_003"]
        }
      ],
      "members": ["user_001", "user_002", "user_003"]
    },
    {
      "_id": "workspace_002",
      "name": "Workspace 2",
      "description": "Description for Workspace 2",
      "boards": [
        {
          "_id": "board_002",
          "name": "Project B",
          "description": "Board for Project B",
          "workspace_id": "workspace_002",
          "lists": ["list_003"],
          "members": ["user_001"]
        }
      ],
      "members": ["user_001"]
    }
  ],
  "lists": [
    {
      "_id": "list_001",
      "board_id": "board_001",
      "name": "To Do",
      "position": 0,
      "cards": [
        {
          "_id": "card_001",
          "list_id": "list_001",
          "name": "Task 1",
          "description": "Description for task 1",
          "assigned_to": ["user_001"],
          "members": ["user_001", "user_002"],
          "due_date": "2024-06-20T00:00:00Z",
          "position": 0,
          "labels": ["label_001"],
          "comments": ["comment_001"],
          "log": []
        },
        {
          "_id": "card_002",
          "list_id": "list_001",
          "name": "Task 2",
          "description": "Description for task 2",
          "assigned_to": ["user_002"],
          "members": ["user_002", "user_003"],
          "due_date": "2024-06-22T00:00:00Z",
          "position": 1,
          "labels": ["label_002"],
          "comments": [],
          "log": []
        }
      ]
    },
    {
      "_id": "list_002",
      "board_id": "board_001",
      "name": "In Progress",
      "position": 1,
      "cards": [
        {
          "_id": "card_003",
          "list_id": "list_002",
          "name": "Task 3",
          "description": "Description for task 3",
          "assigned_to": ["user_001", "user_002"],
          "members": ["user_001", "user_002", "user_003"],
          "due_date": "2024-06-25T00:00:00Z",
          "position": 0,
          "labels": ["label_001", "label_003"],
          "comments": ["comment_002", "comment_003"],
          "log": []
        }
      ]
    },
    {
      "_id": "list_003",
      "board_id": "board_002",
      "name": "To Do",
      "position": 2,
      "cards": [
        {
          "_id": "card_004",
          "list_id": "list_003",
          "name": "Task 4",
          "description": "Description for task 4",
          "assigned_to": ["user_001"],
          "members": ["user_001"],
          "due_date": "2024-06-30T00:00:00Z",
          "position": 0,
          "labels": ["label_004"],
          "comments": [],
          "log": []
        }
      ]
    }
  ],
  "comments": [
    {
      "_id": "comment_001",
      "card_id": "card_001",
      "user_id": "user_002",
      "text": "This is a comment on task 1",
      "timestamp": "2024-06-11T10:00:00Z"
    },
    {
      "_id": "comment_002",
      "card_id": "card_003",
      "user_id": "user_001",
      "text": "This is a comment on task 3",
      "timestamp": "2024-06-11T12:00:00Z"
    },
    {
      "_id": "comment_003",
      "card_id": "card_003",
      "user_id": "user_002",
      "text": "This is another comment on task 3",
      "timestamp": "2024-06-11T13:00:00Z"
    }
  ],
  "labels": [
    {
      "_id": "label_001",
      "name": "Urgent",
      "color": "red"
    },
    {
      "_id": "label_002",
      "name": "Bug",
      "color": "blue"
    },
    {
      "_id": "label_003",
      "name": "Feature",
      "color": "green"
    },
    {
      "_id": "label_004",
      "name": "Improvement",
      "color": "yellow"
    }
  ]
};

const initializeDB = async () => {
  await addData('users', sampleData.users);
  await addData('workspaces', sampleData.workspaces);
  await addData('lists', sampleData.lists);
  await addData('comments', sampleData.comments);
  await addData('labels', sampleData.labels);
};

export { initializeDB };
