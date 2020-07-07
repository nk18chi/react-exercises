import axios from "axios";

const mockAxios: jest.Mocked<typeof axios> = jest.genMockFromModule("axios");
mockAxios.create = jest.fn(() => mockAxios);
export default mockAxios;
