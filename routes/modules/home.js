// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 urls model
// const Urls = require('../../models/urls')
// const shortenUrl = require("../../public/javascripts/shortenurl")


// 定義首頁路由
router.get('/', (req, res) => {
  res.render("index")
})


// 匯出路由模組
module.exports = router