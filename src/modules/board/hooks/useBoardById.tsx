import { Board } from "@/modules/indexdb/kapta.model";
import { useState, useEffect } from "react";

const useBoardById = (boardId: string) => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const request = indexedDB.open("KaptaDB", 2);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("boards")) {
        db.createObjectStore("boards", { keyPath: "_id" });
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("boards")) {
        setError("Object store 'boards' does not exist");
        setLoading(false);
        return;
      }

      const transaction = db.transaction("boards", "readonly");
      const boardStore = transaction.objectStore("boards");
      const boardRequest = boardStore.get(boardId);

      boardRequest.onsuccess = (event: any) => {
        const board = event.target.result;
        if (!board) {
          setError("Board not found");
          setLoading(false);
          return;
        }

        setBoard(board);
        setLoading(false);
      };

      boardRequest.onerror = (event: any) => {
        setError("Failed to retrieve board");
        setLoading(false);
      };
    };

    request.onerror = (event: any) => {
      setError("Failed to open database");
      setLoading(false);
    };
  }, [boardId]);

  return { board, loading, error };
};

export default useBoardById;
