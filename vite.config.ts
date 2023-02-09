import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import WindiCSS from "vite-plugin-windicss"
import typescript from "@rollup/plugin-typescript"

function resolve(str: string) {
  return path.resolve(__dirname, str)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    typescript({
      target: "es5",
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
    lib: {
      // 入口指向组件库入口模块
      entry: resolve("packages/index.ts"),
      name: "lib",
      // 构建生成的文件名，与package.json中配置一致
      fileName: "myapp",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom"],
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
