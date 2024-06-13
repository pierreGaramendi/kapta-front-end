import { Workspace } from "@/modules/indexdb/kapta.model";

interface CustomNavLinkProps {
  workspace: Workspace;
  children?: React.ReactNode;
}

export const WorkspaceWrapper: React.FC<CustomNavLinkProps> = ({
  workspace,
  children,
}) => {
  return (
    <li className="mb-6" key={workspace._id}>
      <h3 className="text-lg mb-2 font-bold">{workspace.name}</h3>
      <ul className="flex flex-row">{children}</ul>
    </li>
  );
};
