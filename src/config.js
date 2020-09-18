const dev = {
  STRIPE_KEY: "pk_test_51HFNalLoiWQjmWw3KWT7FbuOECF6AyHk6g6zFWpZxEbFlG2NQUi3SiVRHBazeNeWG0CK6E1JvjS7gcyDFiJlGFIu00yIoHrpN1",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-aiztwsxfuj2j"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://xd656t9111.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Dd15qV86q",
    APP_CLIENT_ID: "5lkntk5m7hlp1op47dgsrdetep",
    IDENTITY_POOL_ID: "us-east-2:029fa91f-2c7d-4755-8027-b960c6250380"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFNalLoiWQjmWw3KWT7FbuOECF6AyHk6g6zFWpZxEbFlG2NQUi3SiVRHBazeNeWG0CK6E1JvjS7gcyDFiJlGFIu00yIoHrpN1",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ms779ohyckom"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://jxxcv584ca.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_AuhzEVoRu",
    APP_CLIENT_ID: "532rbgvtvu5b8ncnn53m1uobjb",
    IDENTITY_POOL_ID: "us-east-2:de644a13-6578-47f4-be26-b5af67cd890d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values herenotes-app-2-api-dev-attachmentsbucket-aiztwsxfuj2j
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
