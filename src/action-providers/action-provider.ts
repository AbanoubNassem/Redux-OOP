import { Reducer } from "redux";

export default abstract class ActionProvider {
  protected dispatch: (action: any) => void;

  public constructor(dispatch: (action: any) => void = () => {}) {
    this.dispatch = dispatch;
  }

  public abstract reducer: () => Reducer;
}
