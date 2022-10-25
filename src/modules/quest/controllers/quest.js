const Quest = require('../models/Quest')

const questModel = Quest()

const teste = (req, res) => {
  res.send('Hello world!')
}

const create = async (req, res) => {
  const { id_aluno, id_prof, id_perg, resposta } = req.body

  try {
    await questModel.create({ id_aluno, id_prof, id_perg, resposta })
    res.send('criando questionário!')

    res.status(201).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const list = async (req, res) => {
  try {
    const quest = await questModel.list()

    res.send(quest)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const find = async (req, res) => {
  const { id } = req.params

  try {
    const quest = await questModel.find(id)

    res.send(quest)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const update = async (req, res) => {
  const { id } = req.params
  const { id_aluno, id_prof, id_perg, resposta } = req.body

  try {
    await questModel.update(id, { id_aluno, id_prof, id_perg, resposta })

    res.status(204).send()
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const remove = async (req, res) => {
  const { id } = req.params

  try {
    await questModel.remove(id)

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
