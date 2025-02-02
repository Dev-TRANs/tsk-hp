import app from "./src/index.ts"
import { toSSG } from "hono/ssg"
import fs from "fs/promises"

toSSG(app, fs, {
  dir: "./dist",
})
