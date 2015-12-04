var _ = require('lodash');
var crypto = require('crypto');

var key ='yzbqklnj';

function part1(){
	var i =0;
	while(true){
		if(crypto.createHash('md5').update(key+i).digest('hex').substring(0,5)=='00000'){
			console.log(i);
			break;
		}
		i++;
	}
}

function part2(){
	var i =0;
	while(true){
		if(crypto.createHash('md5').update(key+i).digest('hex').substring(0,6)=='000000'){
			console.log(i);
			break;
		}
		i++;
	}
}

part1();
part2();