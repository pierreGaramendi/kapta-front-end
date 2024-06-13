// src/hooks/useUserWorkspaces.ts
import {
  getUserById,
  getWorkspacesByIds,
} from "@/modules/indexdb/test/dbOperations";
import { useState, useEffect } from "react";

const useUserWorkspaces = (userId: string) => {
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        setLoading(true);
        const user = await getUserById(userId);
        if (user) {
          const userWorkspaces = await getWorkspacesByIds(user.workspaces);
          setWorkspaces(userWorkspaces);
        } else {
          setError("User not found");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaces();
  }, [userId]);

  return { workspaces, loading, error };
};

export default useUserWorkspaces;
