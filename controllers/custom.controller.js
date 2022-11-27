const Custom = require('../models/Custom.model')


module.exports.customController = {
  addPost: async (req, res) => {
    try {
      const { dataTime } = req.body
      await Custom.create({
        header: 'Новая заметка',
        text: 'Введите текст',
        dataTime,
      })
      const data = await Custom.find()
      res.json(data)
      
    } catch {
      res
        .status(404)
        .json({ message: 'что-то пошло не так, повторите попытку!' })
    }
  },
  updatePost: async (req, res) => {
    try {
      const { header, text } = req.body
      await Custom.findByIdAndUpdate(req.params.id, {
        header,
        text,
        dataTime,
      })
      res.json('Изменено')
    } catch {
      res
        .status(404)
        .json({ message: 'что-то пошло не так, повторите попытку!' })
    }
  },
  deletePost: async (req, res) => {
    try {
      await Custom.findByIdAndDelete(req.params.id)
      res.json('Удалено')
    } catch {
      res
        .status(404)
        .json({ message: 'что-то пошло не так, повторите попытку!' })
    }
  },
  getPost: async (req, res) => {
    try {
      const data = await Custom.find()
      res.json(data)
    } catch {
      res
        .status(404)
        .json({ message: 'что-то пошло не так, повторите попытку!' })
    }
  },
  getOnePost: async (req, res) => {
    try {
      const data = await Custom.findById(req.params.id)
      res.json([data])
    } catch {
      res
        .status(404)
        .json({ message: 'что-то пошло не так, повторите попытку!' })
    }
  },
}
