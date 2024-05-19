import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch();

export const useAppSelector: <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = useSelector;

export const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <Provider store={store}>{children}</Provider>
);
