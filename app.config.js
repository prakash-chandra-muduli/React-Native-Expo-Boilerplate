import 'dotenv/config';
export default ({ config }) => {
  return {
    ...config,
    extra: {
      apiUrl: process.env.API_URL,
      environment: process.env.ENV,
      eas: {
        projectId: 'a943d14d-2d7c-44f7-9fb3-066362fbd884',
      },
    },
  };
};
