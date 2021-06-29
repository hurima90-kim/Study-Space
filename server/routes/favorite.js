const express = require('express')
const router = express.Router()
const { Favorite } = require('../models/Favorite')

router.post('/favoriteNumber', (req, res) => {

    // MongoDB에서 favorite 숫자 가져오기
    Favorite.find({ "movieId": req.body.moiveId })
    .exec((err, info) => {
        if(err) return res.status(400).send(err)

        // 프론트에 다시 숫자 보내주기
        res.status(200).json({ success: true, favoriteNumber: info.length })
    })
})

module.exports = router;