import useUserStore from "../stores/userStore";
import { useWorkspacesByUserId } from "./hooks/useWorkspacesById";
import { NavLink } from "react-router-dom";

export const WorkspacesAndBoardsPage = () => {
  const { user } = useUserStore();
  const { workspaces } = useWorkspacesByUserId(user?._id || "");
  return (
    <div>
      <div className="my-6">Tableros Favoritos</div>
      <div className="my-6">vistos Recientemente</div>
      <div className="my-6 py-6">
        <h2 className="pb-6">TUS ESPACIOS DE TRABAJO</h2>
        <ul className="flex flex-col justify-between">
          {workspaces.map((workspace) => (
            <li className="mb-6" key={workspace._id}>
              <h3>{workspace.name}</h3>
              <ul className="flex flex-row">
                {workspace.boards.map((board: any) => (
                  <NavLink to={`/tablero/${board._id}`} key={board._id}>
                    <li className="p-6 border rounded mr-2" >
                      <h4>{board.name}</h4>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
