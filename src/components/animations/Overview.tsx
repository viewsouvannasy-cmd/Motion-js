import { motion } from "motion/react";
import { useState } from "react";

export function Overview() {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [rotate, setRotate] = useState(0);
  return (
    <div className="flex flex-col gap-4 p-3">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <motion.div
            initial={{ filter: "blur(10px)" }}
            className="h-30 w-30 border-2"
            animate={{ filter: "none", y, x, rotate }}
            transition={{ type: "spring" }}
          />
          <div>
            <div>
              <p>Y</p>
              <input
                type="range"
                min={0}
                max={1000}
                step={1}
                value={y}
                onChange={(e) => setY(Number(e.target.value))}
              />
            </div>
            <div>
              <p>X</p>
              <input
                type="range"
                min={0}
                max={1000}
                step={1}
                value={x}
                onChange={(e) => setX(Number(e.target.value))}
              />
            </div>
            <div>
              <p>Rotate</p>
              <input
                type="range"
                min={0}
                max={1000}
                step={1}
                value={rotate}
                onChange={(e) => setRotate(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div>
          <motion.button
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            className="rounded-lg bg-indigo-300 p-1 px-3"
          >
            button
          </motion.button>
        </div>
        <div>
          <motion.div
            className="h-20 w-20 bg-black"
            animate={{
              rotate: [10, 40, 80, 160, 0],
              scale: [1, 1.2, 1.5, 1],
              borderRadius: [10, 50, 100, 10],
            }}

            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
          />
        </div>

        <div>
          <motion.div
            className="h-40 w-40 border border-dotted"
            initial={{ opacity: 0 }}
            whileHover={{ backgroundColor: "rgba(0, 0, 0)" }}
            whileTap={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileInView={{ opacity: 1 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
