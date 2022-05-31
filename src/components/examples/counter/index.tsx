import styles from "./counter.module.css";
import { Box } from "@/components/elements";
import { useStore } from "@/store";

function Counter() {
  const { count, inc, dec } = useStore();

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
        Global state management with zustand 
      </Box>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={dec}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={inc}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
