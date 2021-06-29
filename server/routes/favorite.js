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

router.post('/favorited', (req, res) => {

    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기

    // MongoDB에서 favorite 숫자 가져오기
    Favorite.find({ "movieId": req.body.moiveId, "userFrom": req.body.userFrom })
    .exec((err, info) => {
        if(err) return res.status(400).send(err)

        let result = false;
        if(info.length !== 0){
            result = true;
        }

        // 프론트에 다시 숫자 보내주기
        res.status(200).json({ success: true, favorited: result })
    })
})

router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, doc })
        })
})

router.post('/addToFavorite', (req, res) => {
    const favorite = new Favorite(req.body)

    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    }) //  받아온 정보를 저장
})

module.exports = router;