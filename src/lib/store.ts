import headerSlice from '@/features/common/headerSlice'
import modalSlice from '@/features/common/modalSlice'
import rightDrawerSlice from '@/features/common/rightDrawerSlice'
import userSlice from '@/features/common/userSlice'
import leadSlice from '@/features/leads/leadSlice'

import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      header : headerSlice,
      rightDrawer : rightDrawerSlice,
      leads : leadSlice,
      modal : modalSlice,
      user : userSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']