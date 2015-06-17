function wait(seconds,callback) {
    setTimeout(callback,seconds*1000)
}

wait(3,function(){console.log('wait 3 done')})
console.log('not going to wait');

function repeat (times,callback) {
  var step = 0;
  while(step<times){
    callback(step)
    step++;
  }
}

repeat(2,function(iteration){
  wait(4,function(){
  console.log('repeating for i'+iteration);
  wait(iteration*3,function(){
    repeat(3,function(iteration2){
      console.log('i'+iteration+'j'+iteration2)
    })
  })
  })
})

var dataStore = require('./datastore.js');

function User () {

}


var callback = function(error,users){

}

User.find = function(query,callback){
  var myError = null;


  var filteredUsers = dataStore.User.filter(function(val){
    var test = true;
    for(var key in query){
      if(!(key in val)){
        myError = new RangeError('you are probably drunk and '+key+' is not a valid key in the user shema.');
      } else if(typeof val[key] !== typeof query[key]) {
          myError = new TypeError('you are probably stoned and the result of '+key+' is not of the same type as the value in the user schema');
      }
      if(query[key] !== val[key]){
        test = false;
        console.log('helllooooooooooooo')
      }
    }
    console.log(test);
    return test;
  })
  console.log('filteredUsers:',filteredUsers)
  console.log('myError:',myError)
  //callback(error,filteredUsers)

  callback(myError,filteredUsers);

};

//User.find({id:2});


module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};