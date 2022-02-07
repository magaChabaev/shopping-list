import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Card.sass";

interface Props {
  name: string;
  id: number;
  desc?: string;
  price: string;
  file: string;
  deleteCard: Function;
}

const Card: React.FC<Props> = ({ name, deleteCard, id, desc, price, file }) => {
  console.log(desc);
  return (
    <div className="card">
      <img src={file} className="card__img" />
      {desc == undefined ? (
        <p>
          {name} - {price}
        </p>
      ) : (
        <p>
          {name}({desc}) - {price}
        </p>
      )}
      <AiFillDelete onClick={() => deleteCard(id)} />
    </div>
  );
};

export default Card;
