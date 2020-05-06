/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

let mul = document.getElementById("mul");
mul.value = 1;
newminutes = new Date().getMinutes() + 1;
mul.value = 1;
let int=self.setInterval("testTime()",5000);
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
function testTime(){
    let now = new Date();
    let a = add();
    mul.value *= 2;
    console.log(a);
    if( a == 10) {
    	clearInterval(int);
    }
    if(now.getMinutes() == newminutes) {
        clearInterval(int);
    	console.log("到达一分钟已停止");
    } 
}

// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
//let telephone = document.getElementById("telephone"); 
//let mail = document.getElementById("mail");
function testMail(telephone,mail) {
	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; 
    if(myreg.test(telephone) == true) {
        if(reg.test(mail)==true){
            return "The telephone and the mail are right!";
        }else{
        	return "The telephone is right and the mail is wrong!";
        }
    }    
    if(myreg.test(telephone) == false){
        if(reg.test(mail)==true){
        	return "The telephone is wrong and the mail is right!";
        }else{
        	return "The telephone and the mail are wrong!";
        }
    }    
}    
       


/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
//let sentence = document.getElementById("redundancy");
function testRedundancy(str) {
    var patt1 = /\b([a-z]+) \1\b/ig;
    var str_match=str.match(patt1);
//    console.log(str_match);
    let arrSort = str_match.sort(function(s, t) {  
        let a = s.toLowerCase();  
        let b = t.toLowerCase();  
        if (a < b) return -1;  
        if (a > b) return 1;  
        return 0;  
    })  
    arrSort.length = 10;
//    console.log(arrSort);
    let set = new Set(arrSort);
    console.log(set);
}



/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
//let want_Input = document.getElementById("wantInput");
//let actual_Input = document.getElementById("actualInput");
function testKeyBoard(wantInput, actualInput) {
//    let want_value = want_Input.value;
//    let actual_value = actual_Input.value;
    wantInput = wantInput.toUpperCase();
    actualInput = actualInput.toUpperCase();
    let wantSet = new Set(wantInput.split(""));
    let actualSet = new Set(actualInput.split(""));
//    console.log(wantSet);
//    console.log(actualSet);
    var differenceSet = new Set();
    let values = Array.from(wantSet);
    for (let i = 0; i < values.length; i++) {
        if (!actualSet.has(values[i])) {
    //        values[i] = values[i].toUpperCase();
            differenceSet.add(values[i])
        }
    }
    return differenceSet;
//    console.log(differenceSet);
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
//let inputSentence = document.getElementById("reverse");
function testSpecialReverse (str) {
//    let sentence_value = inputSentence.value;
    let inputArr = str.split(" ");
//    console.log(inputArr);
    var deleteArr = inputArr.filter(function (s) {
    return s && s.trim(); 
    });
    deleteArr.reverse();
//    console.log(deleteArr);
    outputStr = deleteArr.join(" ");
    return outputStr;
}

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let myMap = (nums) => new Map(nums.map( (value,key) => [value,key]));
    let i = 0;
    let map = myMap(nums);

    for (i = 0; i < nums.length; i++) {  
        if (map.get(target-nums[i])) {
            let res = [];
            res.push(i);
            res.push(map.get(target-nums[i]));
            return res;
        }     
    }   
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
/*
function lengthOfLongestSubstring(str) {
//    let s = inputStr.value;
    const len = str.length;
    let maxSubstring = str[0];
    let substr = maxSubstring;
    const maxLengthString = (a, b) => {
    let result = a;

    if (a.length < b.length) {
        result = b;
        return result;
    }
    return result;
    };

    for (let i = 1; i <= len; i += 1) {
        if (substr.indexOf(str[i]) === -1) {
            substr += str.substring(i, i + 1);
            maxSubstring = maxLengthString(maxSubstring, substr);
        } else {
            substr = substr.substring((substr.indexOf(str[i]) + 1));
            substr += str[i];
            maxSubstring = maxLengthString(maxSubstring, substr);
        }
    }
//    console.log(maxSubstring.length);
    return maxSubstring.length;
}
*/
function lengthOfLongestSubstring(str) {
    const len = str.length;
    let maxSubstring = str[0];
    let substr = new Map();
    substr.set(str[0],1);

    for (i = 1;i <= len; i += 1) {
        if (substr.get(str[i]) == undefined) {
            substr.set(str[i],i+1);
        } else {
        	return substr.get(str[i-1]);

        }   
    }
    return substr.get(str[i]); 
}


/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

//构造函数
function DevelopingCountry(){
	Country.call(this,"DevelopingCountry");
}
//DevelopingCountry.prototype = new Country();
DevelopingCountry.prototype.sayHi = function(){return "Hi,i am a developing country."};

var instance2 = new DevelopingCountry();

//原型链
function PoorCountry (){
	this.name = "poor country";
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function(){return "I am a sad poor country."};

var instance1 = new PoorCountry();

//Object.create
function DevelopedCountry (){
	Country.call(this,"DevelopedCountry");
}
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy= function(){return "I am a Happy developed country."};

var instance3 = new DevelopedCountry();






