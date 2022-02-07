export const DELETE_CARD = "DELETE_CARD";
export const ADD_CARD = "ADD_CARD";

export const deleteCard = (id: number) => {
  return {
    type: DELETE_CARD,
    payload: { id },
  };
};

export const addCard = (item: {
  id: number;
  name: string;
  price: string;
  desc?: string;
  image: string;
}) => {
  return {
    type: ADD_CARD,
    payload: item,
  };
};
