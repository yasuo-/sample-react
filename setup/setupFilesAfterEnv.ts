import '@testing-library/jest-dom'
import { server } from '../src/__mocks__/server';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());