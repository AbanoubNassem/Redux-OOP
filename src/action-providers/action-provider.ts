import { Reducer } from "redux";

export default abstract class ActionProvider {
  //@ts-ignore
  protected dispatch(action: any) {}

  public abstract reducer: () => Reducer;
}
