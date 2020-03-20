module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db")
    console.log("HIT")
      db.get_inventory().then(result => {
        res.status(200).send(result)
      })
  },

  getProduct: (req, res) => {
    const db = req.app.get("db")
        const  {id} = req.params;
      db.get_product(id).then(result => {
        res.status(200).send(result)
      })
  },

  addProduct: (req, res) => {
    const db = req.app.get("db"),
          {name, price, img} = req.body;
          console.log(req.body);
    db.add_product([name, price, img]).then(result => {
      res.status(200).send(result)
    })
  },

  updateProduct: (req, res) => {
    const db = req.app.get("db"),
          {name, price, img} = req.body,
          {id} = req.params;
    db.update_product([id, name, price, img]).then(result => {
      res.status(200).send(result)
    })
  },
  
  deleteProduct: (req, res) => {
    const db = req.app.get("db"),
          {id} = req.params;
    db.delete_product(id).then(result => {
      res.status(200).send(result)
    })
  },
}

