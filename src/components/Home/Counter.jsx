import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByValue, increment, incrementByValue } from "../../redux/features/counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container ">
      <h1 className="text-center text-2xl ">Counter</h1>
      <p className="text-5xl font-semibold text-center">Count: {count}</p>
      <div className="flex gap-5 items-center justify-center mt-5">
        <button
          onClick={() => dispatch(decrementByValue(10))}
          className="px-3 py-2 bg-white border-2 rounded-md text-xl"
        >
          Decrement -10
        </button>{" "}
        <button
          onClick={() => dispatch(incrementByValue(80))}
          className="px-3 py-2 bg-white border-2 rounded-md text-xl"
        >
          Increment +80
        </button>
        <button onClick={() => dispatch(increment())} className="px-3 py-2 bg-white border-2 rounded-md text-xl">
          Increment +1
        </button>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 bg-white border-2 rounded-md text-xl">
          Decrement -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
