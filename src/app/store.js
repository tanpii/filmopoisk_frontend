import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { movieApi } from './api/movieApi';
import authReducer from "../features/auth/authSlice";
import authApi from "./api/authApi";

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
