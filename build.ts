import app from "./src/index.tsx"
import { toSSG } from "hono/bun"

toSSG(app)
