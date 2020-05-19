export default {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off"
    },
    "globals": {
        "React": "writable"
    },
}