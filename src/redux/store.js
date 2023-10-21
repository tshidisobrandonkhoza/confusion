
import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from '../redux/features/dishes/dishesSlice';
import commentsReducer from "./features/comments/commentsSlice";
import promotionsReducer from "./features/promotions/promotionsSlice";
import leadersReducer from "./features/leaders/leadersSlice";


const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        comments: commentsReducer,
        promotions: promotionsReducer,
        leaders: leadersReducer
    }
});

export default store;