const cs = require('./appoinmentService');

const getAppoinmentfn =async (reqest, rest) =>
{
    const m = await cs.getappoinment();
    rest.send({ "status": true, "data": m });
}

const createAppoinmentfn = async (req, res) => 
{
    const status = await cs.createappoinment(req.body);
    if (status) {
        res.send({ "status": true, "message": "successful" });
    } else {
        res.send({ "status": false, "message": "Error" });
    }

}
const removeAppoinmentfn = async (req, res) => 
{
     console.log(req.params.id);
     const result = await cs.removeclothes(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Deleted"} );
     } else {
         res.send({ "status": false, "message": "ERROR" });
     }
}
module.exports = { getAppoinmentfn, createAppoinmentfn,removeAppoinmentfn};
