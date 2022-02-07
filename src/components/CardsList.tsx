import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { State } from "../redux/reducer";
import "./CardsList.sass";

import Card from "./Card";

interface Props {
  cards: State;
  deleteCard: Function;
}

const CardsList: React.FC<Props> = ({ cards, deleteCard }) => {
  return (
    <div className="list">
      {cards.map((card, index) => (
        <Card
          name={card.name}
          desc={card.desc}
          price={card.price}
          key={index}
          deleteCard={deleteCard}
          id={card.id}
          file={card.file}
        />
      ))}
    </div>
  );
};

const mapState = (state: State) => {
  return {
    cards: state,
  };
};

const mapDispatch = {
  deleteCard: actions.deleteCard,
};

export default connect(mapState, mapDispatch)(CardsList);
