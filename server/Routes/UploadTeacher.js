const Route = require("express").Router()
const multer = require("multer")
const Connection = require("../getMysqlConnection")

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/images/Teacher_Images/')
    },
    filename: (req, file, cb) => {
        const fileName = new Date() + file.originalname;
        cb(null, fileName)
    }
})

// 驗證檔名
let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

Route.post("/post/teacher", upload.single('Image_Path'), (req, res) => {

    let { job, name, academic, gmail, phone, research, teach } = req.body
    let imageData = new Date() + req.file.originalname
    let insertTeacherToTable = `
    INSERT INTO teacher (TR_job,TR_image,TR_name,TR_academic,TR_gmail,TR_phone,TR_research,TR_teach) VALUES (
        '${job}','${imageData}','${name}','${academic}','${gmail}','${phone}','${research}','${teach}'
    )
    `
    Connection.query(insertTeacherToTable, (err, data) => {
        if (err) {
            res.json({ result: "fail", msg: "上傳失敗" })
            console.log(err)
            return
        }
        console.log({ result: "success", msg: "上傳成功" })
        res.json({ result: "success", msg: "上傳成功" })
    })

})

Route.post("/Search/teacherInfo", (req, res) => {
    let { teacherName } = req.body
    const searchTeacherFromDb = `SELECT * FROM teacher WHERE TR_name  = '${teacherName}' `
    Connection.query(searchTeacherFromDb, (err, data) => {
        if (err) {
            res.json({ msg: "NOT FOUND TEACHER" })
            console.log(err)
            return
        }
        if (data.length == 0) {
            res.json({ data: null })
            console.log(err)
            return
        }
        res.json({ data })

        console.log({ data })


    })
})

Route.get("/get/teacherInfo", (req, res) => {
    let GetTeacherFromTable = `SELECT * FROM teacher`
    Connection.query(GetTeacherFromTable, (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.json(data)
    })
})

Route.post("/update/teacherInfo", (req, res) => {
    let { job, name, academic, gmail, phone, research, teach } = req.body
    let UpdateTeacherTable = `
    UPDATE teacher SET TR_name = "${name}",TR_academic = "${academic}",TR_job = "${job}",TR_gmail = "${gmail}",TR_phone ="${phone}",TR_research="${research}",TR_teach="${teach}" WHERE TR_name = "${name}"
    `

    Connection.query(UpdateTeacherTable, (err, data) => {
        if (err) {
            console.log(err)
            res.json({ result: "fail", msg: "更新失敗" })
            console.log(data)
            return
        }
        if (data.changedRows == 0) {
            res.json({ result: "fail", msg: "無更新資料" })
            console.log({ result: "fail", msg: "無更新資料" })
        } else {
            res.json({ result: "success", msg: "資料已更新" })
            console.log({ result: "success", msg: "資料已更新" })
        }
    })

})

Route.post("/delete/teacherInfo", (req, res) => {
    let { name } = req.body
    let DeleteTeacherTable = `
        DELETE FROM teacher WHERE TR_name = '${name}'
    `
    Connection.query(DeleteTeacherTable, (err, data) => {
        if (err) {
            console.log(err)
            res.json({ result: "fail", msg: "刪除失敗" })
            console.log(data)
            return
        }
        if (data.affectedRows == 0) {
            res.json({ result: "fail", msg: "無資料刪除" })
            console.log(data)
        } else {
            res.json({ result: "success", msg: "刪除成功" })
            console.log(data)


        }




    })

})
module.exports = Route