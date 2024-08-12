import { Router } from "express";
import { getBannerData, updateBanner } from "../controllers/banner.controller.js";
const router = Router();

router.route('/banner-info').get(getBannerData).put(updateBanner)

export default router