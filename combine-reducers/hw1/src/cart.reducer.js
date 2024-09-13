import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // перевіряємо чи є продукт вже в корзині
      const productExist = state.products.find(product => product.id === action.payload.id);
      if (productExist) {
        return state;// якщо продукт існує - не добавляємо
      }
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
}

