const cm = require('./appoinmentModel');

module.exports.getappoinment = () => {
    return new Promise(function checkURL(resolve, reject) {
        cm.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
    }).catch(e => {
    });
 }

 module.exports.createappoinment = (appoinmentd) => {
    return new Promise(function myFn(resolve, reject) {
        const cmd = new cm()
        cmd.username = appoinmentd.username;
        cmd.pnum = appoinmentd.pnum;
        cmd.srvce = appoinmentd.srvce;
        cmd.Addate = appoinmentd.Addate;
        cmd.prsn = appoinmentd.prsn;
        cmd.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    }).catch(e => {    
    });
 }


 module.exports.removeappoinment = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        cm.findByIdAndDelete(id, function returnData(error, result) {

          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    }).catch(e => {       
    }); 
 }