'use strict';

exports.ok = function(values, res){
    var data = {
        'status': 200,
        'values': values
    }

     // JSON dimulai dalam array    
     res.json(data);
     res.end
}