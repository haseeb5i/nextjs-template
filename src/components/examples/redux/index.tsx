import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "@/state/counterSlice";
import styles from "./styles.module.css";
import { Box } from "@/components/layout";

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Box
        as="h2"
        css={{
          bgColor: "$primaryBg",
          p: "$md",
          mb: "$5",
          borderRadius: "$sm",
        }}
      >
        Global state management with redux
      </Box>
      <Box css={{ px: "$md" }}>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>
        </div>
      </Box>
    </div>
  );
}

export default Counter;
