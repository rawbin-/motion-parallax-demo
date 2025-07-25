import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, MotionConfig } from 'motion/react'

const initial = {
    opacity: 0, /* 初始透明度为0 */
    transform: 'translateY(50px)' /* 初始位置从下方50px开始 */
}

const whileInView = {
    opacity: 1, /* 最终透明度为1 */
    transform: 'translateY(0)' /* 回到正常位置 */
}

const motionProps = {
    layout:true,
    initial, // 移动端传空
    // initial: {},
    whileInView,
    // whileInView: {}, // 移动端传空
    viewPort:{
        once: true  //去掉这个便于调试
    }
}

const motionConfig = {
    // transition: {}  // 移动端传空
    transition: {
        duration: 1,
        delay: 1,
        ease: 'easeOut'
    },

}

function App() {
  const [count, setCount] = useState(0)

  const getBlocks = () => {
      return Array(8).fill('').map((item,index) => {
          return <div>
              <motion.h1 {...motionProps}>{
                  `${index}`.repeat(20)
              }</motion.h1>
              <motion.div {...motionProps}>
                  <a href="https://vite.dev" target="_blank">
                      <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
              </motion.div>
              <motion.h1 {...motionProps}>Vite + React</motion.h1>
              <motion.div {...motionProps} className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                  </button>
                  <p>
                      Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
              </motion.div>
              <motion.p {...motionProps} className="read-the-docs">
                  Click on the Vite and React logos to learn more
              </motion.p>
          </div>
      })
  }

  return (
          <MotionConfig {...motionConfig}>
              {
                  getBlocks()
              }
              </MotionConfig>
  )
}

export default App
