Array.prototype.sum = function(){
    return this.reduce((partialSum, a) => partialSum + a, 0);
}
Object.defineProperty(Array.prototype, "sum", {enumerable: false});

Array.prototype.append = function(el){
    return this.push(el);
}
Object.defineProperty(Array.prototype, "append", {enumerable: false}); 

Array.prototype.find = function(el){
    matches = []; 
    for(x in this) { 
        if(JSON.stringify(this[x]) == JSON.stringify(el)){
            matches.push(x);
        } 
    }
    if(matches.length == 1){
        return matches[0];
    }
    return matches; 
}
Object.defineProperty(Array.prototype, "find", {enumerable: false}); 

Array.prototype.delete = function(el){
    let matches = this.find(el); 
    for(match of matches){
        delete this[match]; 
    }
    // reindex, removing deleted elements.
    let filtered = this.filter(v=>v); 
    this.length = 0; 
    filtered.forEach(item => this.push(item));
    //this = this.filter(v=>v); 

    return matches.length != 0
}
Object.defineProperty(Array.prototype, "delete", {enumerable: false}); 


Object.prototype.items = function(){
    return Object.entries(this);
}
Object.defineProperty(Object.prototype, "items", {enumerable:false}); 


Object.prototype.keys = function(){
    return Object.keys(this);
}
Object.defineProperty(Object.prototype, "keys", {enumerable:false}); 


Object.prototype.randomVal = function(){
    return this[Object.keys(this)[Math.floor(Math.random()*Object.keys(this).length)]]
}
Object.defineProperty(Object.prototype, "randomVal", {enumerable:false}); 


Object.prototype.randomKey = function(){
    return Object.keys(this)[Math.floor(Math.random()*Object.keys(this).length)];
}
Object.defineProperty(Object.prototype, "randomKey", {enumerable:false}); 


String.prototype.ucfirst = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
Object.defineProperty(String.prototype, "ucfirst", {enumerable:false}); 


String.prototype.title = function(){
  return this.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
Object.defineProperty(String.prototype, "title", {enumerable:false}); 



Date.prototype.format = function(dateString){
    const map = {
        "%M": ("0"+(this.getMonth() + 1)).slice(-2),
        "%d": this.getDate(),
        "%y": this.getFullYear().toString().slice(-2),
        "%Y": this.getFullYear(), 
        "%H": this.getHours(),
        "%i": this.getMinutes(),
        "%m": this.getMinutes(),
        "%s": this.getSeconds()
    }

    return dateString.replace(/%M|%d|%y|%Y|%H|%i|%m|%s/gi, matched => map[matched])
}
Object.defineProperty(Date.prototype, "format", {enumerable:false});
