import useUserStore from "../stores/userStore";
import useUserWorkspaces from "./hooks/useUserWorkspaces";
import { BoardItem } from "./components/BaordItem";
import { WorkspaceWrapper } from "./components/WorkspaceWrapper";

export const WorkspacesAndBoardsPage = () => {
  const { user } = useUserStore();
  const { workspaces } = useUserWorkspaces(user?._id || "");
  return (
    <div>
      <h3 className="mb-6 text-lg font-bold">Tableros Favoritos</h3>
      <div className="mb-6 text-lg font-bold">Vistos Recientemente</div>
      <div className="mb-6 py-6">
        <h2 className="pb-6 text-lg font-bold">TUS ESPACIOS DE TRABAJO</h2>
        <ul className="flex flex-col justify-between">
          {workspaces.map((workspace) => (
            <WorkspaceWrapper workspace={workspace}>
              {workspace.boards.map((board: any) => (
                <BoardItem board={board} />
              ))}
            </WorkspaceWrapper>
          ))}
        </ul>
      </div>
    </div>
  );
};
