import { useParams } from "react-router-dom";
import useListsByBoardId from "./hooks/useListsByBoardId";
import { Card } from "../indexdb/kapta.model";
import { MyDialog } from "./Dialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useBoardById } from "./hooks/useBoardById";

export const Board = () => {
  const { id } = useParams<{ id: string }>();
  const { board } = useBoardById(id || "");
  const { lists } = useListsByBoardId(id || "");
  console.log(lists);
  return (
    <div className="h-full">
      <header className="border">
        <h2>Lists for Board {board.name}</h2>
      </header>
      
      <ul className="border flex flex-row" >
        {lists.map((list) => (
          <li className="border p-4 m-4" style={{minWidth:"200px"}} key={list._id}>
            <span>{list.name}</span>
            <div>
              {list.cards.map((card: Card) => (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="border p-2 cursor-pointer" key={card._id}>
                      {card.name}
                    </div>
                  </DialogTrigger>
                  <MyDialog></MyDialog>
                </Dialog>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
