const url = process.env.SLACK_WEBHOOK_URL;

const webhook = new IncomingWebhook(url);

{
  "main": "index.js",
  "dependencies": {

      /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.ts',

    //Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1'
  },

    "next": "~12.2.2",
    "next-i18next": "^12.0.1",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-redux": "^8.0.2",
    "redux": "^4.2.0",
    "redux-persist": "^6.0.0",
    "styled-components": "^5.3.5",
    "styles": "^0.2.1",
    "ts-jest": "^29.0.1",
    "yup": "^0.32.11"
  },

    "body-parser": "^1.20.0",
    "json5": "^2.2.1"
