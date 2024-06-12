import { useParams } from "react-router-dom";
import useListsByBoardId from "./hooks/useListsByBoardId";
import useBoardById from "./hooks/useBoardById";

export const Board = () => {
  const { id } = useParams<{ id: string }>();
  const { board } = useBoardById(id || "");
  const { lists } = useListsByBoardId(id || "");
  return (
    <div>
      <h2>Lists for Board {board?.name}</h2>
      <ul>
        {JSON.stringify(lists)}
        {lists.map((list) => (
          <li key={list._id}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
};
