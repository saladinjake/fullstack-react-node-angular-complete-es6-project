let _singleton = null
class LocalConfigStore{
  constructor(){
    if(!_singleton){
       _singleton = this;
     }
    this.dataStore = {};
   return _singleton;
  }
  setItem(key, val){
    this.dataStore[key] = val;
  }
  getItem(key){
    return this.dataStore[key];
  }
}

let Store = new LocalConfigStore();

module.exports=Store;
