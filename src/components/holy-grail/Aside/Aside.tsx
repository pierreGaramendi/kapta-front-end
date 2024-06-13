import React from "react";
import { Mail } from "lucide-react";
/* import { useWorkspacesByUserId } from "@/modules/workspace/hooks/useWorkspacesById"; */
import { AsideHeader } from "./components/AsideHeader";
import { AsideItem } from "./components/AsideItem";
import useUserWorkspaces from "@/modules/workspace/hooks/useUserWorkspaces";

export const Aside: React.FC<{ visible: boolean }> = ({ visible }) => {
  const userId = "user_001";
  const { workspaces, loading, error } = useUserWorkspaces(userId);
  /* const { workspaces } = useWorkspacesByUserId(userId); */
  return (
    <aside
      className={`aside border-b bg-popover ${
        visible ? "visible" : ""
      } flex flex-col`}
    >
      <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-popover px-3 py-4 dark:bg-popover">
        <AsideHeader visible={visible} />
        <ul className="space-y-2 text-sm font-medium">
          <li>
            <AsideItem label="Home" path="/home">
              <Mail />
            </AsideItem>
          </li>
          <li>
            <AsideItem label="Tablero" path="/tableros">
              <Mail />
            </AsideItem>
          </li>
          
           {workspaces.map((workspace) => (
            <li key={workspace._id}>
              <h3>{workspace.name}</h3>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex">
          <div className="flex w-full justify-between">
            <span className="text-sm font-medium text-black dark:text-white">
              email@example.com
            </span>
            <Mail />
          </div>
        </div>
      </div>
    </aside>
  );
};
