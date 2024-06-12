import { Board, User, Workspace } from "@/modules/indexdb/kapta.model";
import { useState, useEffect } from "react";

type TWorkspaceWithBoardsOne = Omit<Workspace, 'boards'>;
interface IWorkspaceWithBoards extends TWorkspaceWithBoardsOne {
  boards: Board[];
}

export const useWorkspacesByUserId = (userId: string) => {
  const [workspaces, setWorkspaces] = useState<IWorkspaceWithBoards[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('effect-useWorkspacesByUserId');

    const fetchWorkspaces = async () => {
      const request = indexedDB.open('KaptaDB', 2);

      request.onsuccess = (event: any) => {
        const db = event.target.result;

        // Verificar la existencia de las tablas necesarias
        if (!db.objectStoreNames.contains('users') || 
            !db.objectStoreNames.contains('workspaces') || 
            !db.objectStoreNames.contains('boards')) {
          setError('Required object stores are missing');
          setLoading(false);
          return;
        }

        const transaction = db.transaction(['users', 'workspaces', 'boards'], 'readonly');
        const userStore = transaction.objectStore('users');
        const workspaceStore = transaction.objectStore('workspaces');
        const boardStore = transaction.objectStore('boards');

        const userRequest = userStore.get(userId);
        userRequest.onsuccess = async () => {
          const user = userRequest.result as User;
          if (user) {
            try {
              const workspaceRequests = user.workspaces.map(workspaceId => workspaceStore.get(workspaceId));
              const workspaceResults = await Promise.all(
                workspaceRequests.map(req => new Promise<Workspace>((resolve, reject) => {
                  req.onsuccess = () => resolve(req.result);
                  req.onerror = () => reject('Failed to fetch workspace');
                }))
              );

              const workspacesWithBoards = await Promise.all(
                workspaceResults.map(async workspace => {
                  const boardRequests = workspace.boards.map(boardId => boardStore.get(boardId));
                  const boards = await Promise.all(
                    boardRequests.map(req => new Promise<Board>((resolve, reject) => {
                      req.onsuccess = () => resolve(req.result);
                      req.onerror = () => reject('Failed to fetch board');
                    }))
                  );
                  return { ...workspace, boards };
                })
              );

              setWorkspaces(workspacesWithBoards);
            } catch (error) {
              setError(`Failed to fetch workspaces: ${error}`);
            }
          } else {
            setError('User not found');
            setWorkspaces([]);
          }
          setLoading(false);
        };

        userRequest.onerror = () => {
          setError('Failed to fetch user');
          setLoading(false);
        };
      };

      request.onerror = () => {
        setError('Failed to open database');
        setLoading(false);
      };
    };

    fetchWorkspaces();
  }, [userId]);

  return { workspaces, loading, error };
};
