export type ReactStateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type ReactState<T> = [T, ReactStateSetter<T>];
