// set up the testing environment before each test
// amplify ui testing setup
// see: https://ui.docs.amplify.aws/react/getting-started/troubleshooting#jest
// @ts-ignore
if (typeof window.URL.createObjectURL === 'undefined') {
  window.URL.createObjectURL = jest.fn();
}
