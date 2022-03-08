const express = require("express");
const reviewRouter = express.Router();
const{protectRoute}=require('../controller/authController');
const{getAllReviews,top3reviews,getPlanReviews,createReview,updateReview,deleteReview}=require('../controller/reviewController');

reviewRouter
.route('/all')
.get(getAllReviews);

reviewRouter
.route('/health')
.get(healthCheck)

async function healthCheck(req, res) {
    return res.status(200).send("Health is fine. Pipeline successfull again.");
}

reviewRouter
.route('/top3')
.get(top3reviews);

reviewRouter
.route('/:id')
.get(getPlanReviews);

reviewRouter.use(protectRoute);
reviewRouter
.route('/crud/:plan')
.post(createReview)
.patch(updateReview)
.delete(deleteReview)

module.exports=reviewRouter;




