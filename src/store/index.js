import { configureStore } from "@reduxjs/toolkit";

// import uiSlice from "./ui-slice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: { form: formSlice },
});

export default store;
