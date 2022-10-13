const ProductsModel = require('../models/products')

async function get(req, res){
  const {id} = req.params
  const obj = id ? {_id: id} : null
  const products = await ProductsModel.find(obj)
  res.send(products)
}

async function post(req, res){
  const {
    name,
    brand,
    price
  } = req.body

  const products = new ProductsModel({
    name,
    brand,
    price
  })

  products.save()

  res.send({
    message: 'Produto cadastrado com sucesso'
  })
}

async function put(req, res){
  const {id} = req.params

  // Atualiza os itens mas não os retorna na resposta
  /*
  const products = await ProductsModel.findById({_id: id})
  await ProductsModel.updateOne(req.body)
  */

  // Atualiza os itens e retorna na resposta
  const product = await ProductsModel.findByIdAndUpdate({_id: id}, req.body,{new: true})

  console.log(product)
  res.send({
    message: "Produto atualizado com sucesso",
    product
  })
}

async function remove(req, res){
  const {id} = req.params
  const remove = await ProductsModel.deleteOne({_id: id})
  const message = remove.deletedCount ? "sucess" : "error"

  res.send({
    message
  })
}

module.exports = {
  get,
  post,
  put,
  remove
}