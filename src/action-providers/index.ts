import { Reducer } from "redux";

export abstract class ActionProvider {
  protected init() {}
  //@ts-ignore
  protected getState(): any {}
  //@ts-ignore
  private dispatch(action: any) {}

  //@ts-ignore
  protected dispatchAction(type: string, payload: any = {}): any {
    return this.dispatch({
      type,
      payload
    });
  }

  protected abstract reducer: () => Reducer;
}

export interface IActionProviders {}
