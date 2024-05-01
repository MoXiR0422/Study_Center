const { v4: uuidv4 } = require('uuid');

const { Pool } = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'my_pgdb',
    password:'20010422',
    port:'5432',
});

const getTeacherSystem = async(req,res) => {
    const {id} = req.params;
    let ask = `SELECT * FROM teachers WHERE id = '${id}'`;
    let results = await pool.query(ask);
    console.log(results.rows);
    results.rows.length ? res.status(200).send(results.rows).end() : res.status(400).json('teacher topilmadi').end();
}

const GetAllTeachersSystem = async(req,res) => {
    try{
        let ask = 'SELECT * FROM teachers';
        let results = await pool.query(ask);
        res.status(200).send(results.rows).end();
    }catch(error){
        res.json(error)
    }
}

const deleteTeacherSystem = async(req,res) => {
    const {id} = req.params;
    let str = await findUser(id);
    if(str){
        const {id} = req.params;
        let findItem = `DELETE FROM teachers WHERE id = '${id}'`;
        await pool.query(findItem);    
        res.json('success').end();
    }else{
        res.json('topilmadi').end();
    }
}

const updateItem = async(req,res) => {
    const {id} = req.params;
    const updateItem = req.body;

    let valueUpdateItem = '';
    Object.keys(updateItem).forEach(function(key, index) {
        valueUpdateItem+=`${key}='${updateItem[key]}'`
    });
    // let sdk = `UPDATE teachers SET ${valueUpdateItem} WHERE id = '${id}'`;

    try{
        let userSTR = `UPDATE teachers SET ${valueUpdateItem} WHERE id = '${id}'`;
        console.log(userSTR);
        await pool.query(userSTR);
        res.end();
    }catch(err){
        console.log('hato');
    }
}

const findUser = (id) => {
    return new Promise((resolve, reject) => {
        let findItem = `SELECT EXISTS(SELECT 1 FROM teachers WHERE id = '${id}')`;
        pool.query(findItem)
        .then(result => {
            if(result.rows[0].exists ){
                resolve(true);
            }else{
                resolve(false);
            }
        })
        .catch(err => reject(err));   
    })
}

const addNewTeacherSystem = async(req,res) => {
    console.log("kelitti");
    try{
        let id = uuidv4();
        const itemInfo = req.body;
        let createItemKey = 'id';
        let createItemInfo=`'${id}'`;
        Object.keys(itemInfo).forEach(function(key, index) {
            createItemKey+=`,${key}`;
            createItemInfo+=`,'${itemInfo[key]}'`;
        });

        
        let info = `INSERT INTO teachers (${createItemKey}) 
        VALUES(${createItemInfo})`;
        // console.log(info);
        await pool.query(info);
        res.status(200).jsvon('success').end();
    }catch{
        res.status(500).json('malumotni saqlashdagi xatolik').end();
    }
}

module.exports = {
    getTeacherSystem,
    GetAllTeachersSystem,
    deleteTeacherSystem,
    updateItem,
    addNewTeacherSystem,
}