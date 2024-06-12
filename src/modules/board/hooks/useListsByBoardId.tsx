import { List } from "@/modules/indexdb/kapta.model";
import { useState, useEffect } from "react";

const useListsByBoardId = (boardId: string) => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const request = indexedDB.open("KaptaDB", 2);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("lists")) {
        const listStore = db.createObjectStore("lists", { keyPath: "_id" });
        listStore.createIndex("board_id", "board_id", { unique: false });
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains("lists")) {
        setError("Object store 'lists' does not exist");
        setLoading(false);
        return;
      }

      const transaction = db.transaction("lists", "readonly");
      const listStore = transaction.objectStore("lists");
      console.log("ffffffffffffffffffffffff",listStore)
      if (!listStore.indexNames.contains("board_id")) {
        console.log("3333333333333333333333333333333333333")
        setError("Index 'board_id' does not exist on 'lists' object store");
        setLoading(false);
        return;
      }
      
      const index = listStore.index("board_id");
      const listsRequest = index.getAll(boardId);
      
      listsRequest.onsuccess = (event: any) => {
        setLists(event.target.result);
        setLoading(false);
      };

      listsRequest.onerror = (event: any) => {
        setError("Failed to retrieve lists");
        setLoading(false);
      };
    };

    request.onerror = (event: any) => {
      setError("Failed to open database");
      setLoading(false);
    };
  }, [boardId]);

  return { lists, loading, error };
};

export default useListsByBoardId;
