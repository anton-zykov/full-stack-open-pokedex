import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import jest from "eslint-plugin-jest";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import cypress from "eslint-plugin-cypress";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig(
    [globalIgnores(["**/webpack.config.js", "**/node_modules/", "**/dist/"]), {
        extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

        plugins: {
            react,
            jest,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...jest.environments.globals.globals,
                ...globals.node,
                ...cypress.environments.globals.globals,
            },

            ecmaVersion: 2018,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            indent: ["error", 2],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "single"],
            semi: ["error", "never"],
            eqeqeq: "error",
            "no-trailing-spaces": "error",
            "object-curly-spacing": ["error", "always"],

            "arrow-spacing": ["error", {
                before: true,
                after: true,
            }],

            "no-console": "error",
            "react/prop-types": 0,
        },
    }],
);