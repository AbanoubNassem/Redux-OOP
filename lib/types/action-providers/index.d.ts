import { Reducer } from "redux";
export default abstract class ActionProvider {
    protected dispatch(action: any): void;
    abstract reducer: () => Reducer;
}
export interface IActionProviders {
}
