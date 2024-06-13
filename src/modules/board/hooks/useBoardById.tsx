// src/hooks/useListsByBoardId.ts
import { Board } from '@/modules/indexdb/kapta.model';
import { getBoardById } from '@/modules/indexdb/test/dbOperations';
import { useState, useEffect } from 'react';


export const useBoardById = (boardId: string) => {
  const [board, setBoard] = useState<Board | {}>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        setLoading(true);
        const boardData = await getBoardById(boardId);
        if (boardData) {
          setBoard(boardData);
        } else {
          setError(`Board with ID ${boardId} not found.`);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoard();
  }, [boardId]);

  return { board, loading, error };
};