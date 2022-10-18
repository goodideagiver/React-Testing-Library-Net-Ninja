const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'sdxa',
          last: 'dasdsa',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/33.jpg',
        },
        login: {
          username: 'goat',
        },
      },
    ],
  },
}

const axios = {
  get: jest.fn().mockResolvedValue(mockResponse),
}

export default axios
