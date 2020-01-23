const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
  //Listar os produtos
  async index(req, res) {
    const { page = 1 } = req.query
    const products = await Product.paginate({}, { page, limit: 10 })

    return res.json(products)
  },

  //Mostrar um produto
  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product)
  },

  //Inserir os produtos
  async store(req, res) {
    const product = await Product.create(req.body)

    return res.json(product)
  },

  // Alterar
  async update(req, res) {
    const product = await Product.useFindAndModify(req.params.id, req.body, { new: true })

    return res.json(product)
  },

  // Destruir
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id)

    return res.send()
  }
}