import headerSlice from "@/components/features/common/headerSlice";
import modalSlice from "@/components/features/common/modalSlice";
import rightDrawerSlice from "@/components/features/common/rightDrawerSlice";
import userSlice from "@/components/features/common/userSlice";
import leadSlice from "@/app/(protected)/leads/leadSlice";

import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      header: headerSlice,
      rightDrawer: rightDrawerSlice,
      leads: leadSlice,
      modal: modalSlice,
      user: userSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
