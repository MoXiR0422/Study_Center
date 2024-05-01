const router = require('express').Router();
const { getTeacherSystem,
        GetAllTeachersSystem,
        deleteTeacherSystem,
        updateItem,
        addNewTeacherSystem} = require('../Controllers/TeacherCTRL');

router.get('/GetAllTeachers',GetAllTeachersSystem)


router.get('/getTeacher/:id',getTeacherSystem)

router.post('/add/NewTeacher',addNewTeacherSystem)

router.put('/UpdateTeacher/:id',updateItem)

router.delete('/DeleteTeacher/:id',deleteTeacherSystem)

module.exports = router;