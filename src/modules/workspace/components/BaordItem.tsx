import { Board } from "@/modules/indexdb/kapta.model";
import { NavLink } from "react-router-dom";
interface BoardItemProps {
  board: Board;
}
export const BoardItem: React.FC<BoardItemProps> = ({ board }) => {
  return (
    <NavLink to={`/tablero/${board._id}`} key={board._id}>
      <li
        className="flex justify-center items-center p-6 border rounded mr-2 hover:bg-violet-600"
        style={{ minWidth: "150px" }}
      >
        <h4 className="text-lg font-bold">{board.name}</h4>
      </li>
    </NavLink>
  );
};
