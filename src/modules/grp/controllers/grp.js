const Grp = require('../models/Grp')

const grpModel = Grp()

const teste = (req, res) => {
  res.send('Hello world!')
}

const create = async (req, res) => {
  const { descricao } = req.body

  try {
    await grpModel.create({ descricao })
    res.send('criando grupo!')

    res.status(201).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const list = async (req, res) => {
  try {
    const grp = await grpModel.list()

    res.send(grp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const find = async (req, res) => {
  const { id } = req.params

  try {
    const grp = await grpModel.find(id)

    res.send(grp)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const { descricao } = req.body

  try {
    await grpModel.update(id, { descricao })

    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const remove = async (req, res) => {
  const { id } = req.params

  try {
    await grpModel.remove(id)

    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  teste,
  create,
  list,
  find,
  update,
  remove
}
