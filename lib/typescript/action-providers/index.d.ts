import { Reducer } from "redux";
export declare abstract class ActionProvider {
    protected init(): void;
    protected getState(): any;
    private dispatch;
    protected dispatchAction(type: string, payload?: any): any;
    protected abstract reducer: () => Reducer;
}
export interface IActionProviders {
}
