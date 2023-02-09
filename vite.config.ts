import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import typescript from "@rollup/plugin-typescript"
import viteCompression from "vite-plugin-compression"

import { visualizer } from "rollup-plugin-visualizer"

function resolve(str: string) {
  return path.resolve(__dirname, str)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      emitFile: true, //是否被触摸
      filename: "test.html", //生成分析网页文件名
      open: true, //在默认用户代理中打开生成的文件
      gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
      brotliSize: true, //从源代码中收集 brotli 大小并将其显示在图表中
    }),
    viteCompression(),
    typescript({
      target: "es6",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("lib"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }),
  ],
  build: {
    // 打包输出的目录
    outDir: "lib",
    minify: true,
    cssCodeSplit: true,
    lib: {
      // 入口指向组件库入口模块
      entry: resolve("packages/index.ts"),
      name: "lib",
      // 构建生成的文件名，与package.json中配置一致
      fileName: "myapp",
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: false, //去掉console
        drop_debugger: false, // 去掉debugger
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom", "lodash-es", "antd"],
      output: {
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
})
