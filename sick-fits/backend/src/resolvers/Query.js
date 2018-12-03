const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db'),
  // async items(parent, args, cntx, info) {
  //   const items = await cntx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;