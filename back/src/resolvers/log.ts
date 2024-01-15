const logs = [
  { userId: 1, endpoint: '/endpoint' },
  { userId: 2, endpoint: '/login' },
  { userId: 3, endpoint: '/info' },
  { userId: 4, endpoint: '/wp' },
];

export const logsResolver = {
  Query: {
    logs: async () => {
      return logs;
    },
    lastLog: async () => {
      return logs[logs.length - 1];
    },
  },
};
