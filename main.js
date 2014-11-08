var hash = new Uint32Array([5381]),
    i;

module.exports = function(str){
  hash[0] = 5381;
  
  str += '';
  for(i = 0;i < str.length;i++) hash[0] = hash[0] * 33 + str.charCodeAt(i);
  
  return hash[0] / 4294967296;
};

