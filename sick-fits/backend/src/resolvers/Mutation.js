const Mutation = {
  async createItem(parent, args, cntx, info) {
    const item = await cntx.db.mutation.createItem({
      data: {...args}
    }, info);

    return item;
  }
};

module.exports = Mutation;
