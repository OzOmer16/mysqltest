const express = require("express")
const router = express.Router()

const plangController = require("../controllers/planguagesController")





// /planguages

router.get("/", plangController.getAllplanguages )


router.post("/", plangController.postPlanguage)


router.get("/:id", plangController.getOneplanguage )


router.put("/:id", plangController.uptadeOnePlanguage)


router.delete("/:id", plangController.deleteOnePlanguage)





module.exports = router




