export interface Cards {
  name: string;
  id: number;
  desc?: string;
  price: string;
  file: string;
}

interface ActionDelete {
  type: "DELETE_CARD";
  payload: { id: number };
}

interface ActionAdd {
  type: "ADD_CARD";
  payload: {
    id: number;
    price: string;
    desc?: string;
    name: string;
    file: string;
  };
}

export type State = Cards[];

type Actions = ActionDelete | ActionAdd;

export const reducer = (
  state: State = [
    { id: 0, name: "Milk", price: "50", file: "" },
    { id: 1, name: "Bread", price: "10", file: "123" },
  ],
  action: Actions
) => {
  switch (action.type) {
    case "DELETE_CARD": {
      const { id } = action.payload;
      return [...state.filter((item) => item.id !== id)];
    }
    case "ADD_CARD": {
      const { desc, price, file, name, id } = action.payload;
      if (desc === undefined) return [...state, { id, price, file, name }];
      return [...state, { id, price, file, name, desc }];
    }
    default:
      return state;
  }
};
