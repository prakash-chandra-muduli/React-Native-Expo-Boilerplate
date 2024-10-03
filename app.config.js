import "dotenv/config";
export default ({ config }) => {
  console.log(process.env.ENV, "????????????ENV");

  return {
    ...config,
    extra: {
      apiUrl: process.env.API_URL,
      environment: process.env.ENV,
    },
  };
};
