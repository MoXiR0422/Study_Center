const router = require('express').Router();
const { getStudentSystem,
        GetAllStudentsSystem,
        deleteStudentSystem,
        updateItem,
        addNewStudentSystem } = require('../Controllers/StudentCTRL');
router.get('/GetAllStudents',GetAllStudentsSystem)


router.get('/getStudent/:id',getStudentSystem)

router.post('/add/NewStudent',addNewStudentSystem)

router.put('/UpdateStudent/:id',updateItem)

router.delete('/DeleteStudent/:id',deleteStudentSystem)

module.exports = router;