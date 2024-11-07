import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const host = env.SERVER_HOST;
    const isProduction = mode === "production";

    console.log(env.APP_URL);
    console.log(host);
    console.log(isProduction);

    return {
        server: isProduction
            ? false
            : {
                  host,
                  port: 5174,
                  hmr: { host },
                  https: {
                      key: readFileSync(env.SERVER_HTTPS_KEY),
                      cert: readFileSync(env.SERVER_HTTPS_CERT),
                  },
              },
        plugins: [
            laravel({
                input: [
                    "resources/css/app.css",
                    "resources/css/panel/app.css",
                    "resources/js/app.js",
                    "resources/js/appAdmin.js",
                    "resources/js/react/main.jsx",
                    "resources/js/panel/trumbowygInit.js",
                ],
                refresh: true,
            }),
            react(),
        ],
    };
});
