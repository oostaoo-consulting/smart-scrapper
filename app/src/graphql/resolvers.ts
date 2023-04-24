const resolvers = {
  Query: {
    viewer() {
      return { id: 1, name: 'John Smith', status: 'cached' };
    },
  },
};

export default resolvers;
