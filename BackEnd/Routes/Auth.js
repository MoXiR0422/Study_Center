const router = require('express').Router();
const { getTeacherSystem,
        GetAllTeachersSystem,
        deleteTeacherSystem,
        updateItem,
        addNewTeacherSystem} = require('../Controllers/TeacherCTRL');



router.get('/LoginTeacher/',getTeacherSystem)

router.post('/LoginTeacherFacebook',addNewTeacherSystem)

router.put('/LoginTeacherGoogle',updateItem)



module.exports = router;