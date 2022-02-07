import React, { HtmlHTMLAttributes, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { State } from "../redux/reducer";

import "./Button.sass";

interface Props {
  deleteCard: Function;
  addCard: Function;
}

const Button: React.FC<Props> = ({ deleteCard, addCard }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<string>();
  const [price, setPrice] = useState<string>();
  const [name, setName] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const onFileChange = (file: File) => {
    setFile(window.URL.createObjectURL(file));
  };
  return (
    <>
      <div className="button">
        <button onClick={() => setShowModal(true)}>Add +</button>
      </div>
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__content__item">
              <label htmlFor="price" className="modal__content__item__text">
                Price :
              </label>
              <input
                id="price"
                type="text"
                value={price}
                onChange={(e) => {
                  console.log(price);
                  setPrice((e.target as HTMLInputElement).value);
                }}
              />
            </div>
            <div className="modal__content__item">
              <label htmlFor="name" className="modal__content__item__text">
                Name :
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName((e.target as HTMLInputElement).value)}
              />
            </div>
            <div className="modal__content__item">
              <label htmlFor="image" className="modal__content__item__text">
                Image :
              </label>
              <input
                id="image"
                type="file"
                onChange={(e) => onFileChange(e.target.files[0])}
              />
            </div>
            <div className="modal__content__item">
              <label htmlFor="desc" className="modal__content__item__text">
                Description(optional) :
              </label>
              <input
                type="text"
                id="desc"
                value={desc}
                onChange={(e) => setDesc((e.target as HTMLInputElement).value)}
              />
            </div>
            <div>
              <input
                type="submit"
                className="modal__content__submit"
                value="Add new item"
                onClick={() =>
                  addCard({ id: Math.random(), price, desc, name, file })
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapState = (state: State) => {
  return {
    cards: state,
  };
};

const mapDispatch = {
  deleteCard: actions.deleteCard,
  addCard: actions.addCard,
};

export default connect(mapState, mapDispatch)(Button);
