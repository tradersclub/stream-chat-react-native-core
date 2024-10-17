import type { StateStore } from 'stream-chat';
export declare function useStateStore<T extends Record<string, unknown>, O extends readonly unknown[]>(store: StateStore<T>, selector: (v: T) => O): O;
export declare function useStateStore<T extends Record<string, unknown>, O extends readonly unknown[]>(store: StateStore<T> | undefined, selector: (v: T) => O): O | undefined;
//# sourceMappingURL=useStateStore.d.ts.map