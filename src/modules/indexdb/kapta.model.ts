export interface User {
    _id: string;
    name: string;
    email: string;
    workspaces: string[];
}

export interface Workspace {
    _id: string;
    name: string;
    description: string;
    boards: Board[];
    members: string[];
}

export interface Board {
    _id: string;
    name: string;
    description: string;
    workspace_id: string;
    lists: string[];
    members: string[];
}

export interface List {
    _id: string;
    board_id: string;
    name: string;
    position: number;
    cards: string[];
}

export interface Card {
    _id: string;
    list_id: string;
    name: string;
    description: string;
    assigned_to: string[];
    members: string[];
    due_date: string;
    position: number;
    labels: string[];
    comments: string[];
    log: any[];
}

export interface Comment {
    _id: string;
    card_id: string;
    user_id: string;
    text: string;
    timestamp: string;
}

export interface Label {
    _id: string;
    name: string;
    color: string;
}