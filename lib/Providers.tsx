'use client';

import type { PropsWithChildren } from "react";
import { Provider, type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appStore } from "./redux/store";

export function Providers({ children }: PropsWithChildren) {
    return <Provider store={appStore}>{children}</Provider>
}

export const useAppDispatch = () => useDispatch<AppStoreDispacth>();
export const useAppSelector: TypedUseSelectorHook<AppStoreState> = useSelector;
export const selectShop = (state: AppStoreState) => state.shop;

export type AppStoreDispacth = typeof appStore.dispatch;
export type AppStoreState = ReturnType<typeof appStore.getState>
