import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../store/counterSlice";
const Child = () => {
  const list = useSelector((state: RootState) => state.counter.userList);
  const dispatch = useDispatch()

  return (
    <div>
        {JSON.stringify(list)}
    </div>
  );
};

export default Child;


