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

function testTime(){
    let num = 1 ;
    let count = 1;
    function clock(num,count) {
        let time = new Date().getSeconds();
        if(count>10){
            console.log("已计数10次");
        }
        else if(time>55){
            console.log("已达一分钟");
        }
        else if(time<56&&count<11){
            console.log(num);
            num = num*2;
            count++;
            setTimeout(clock,5000,num,count);
        }
    };
    return clock(num,count);
};
// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let telstr = /^1[3,4,5,7,8,9]\d{9}$/;
    let mailstr = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(telstr.test(telephone)){
        if(mailstr.test(mail)){
            console.log("The telephone and the email are both right");
        }
        else{
            console.log("The telephone is right but the mail is wrong");
        }
    }
    else if(mailstr.test(mail)){
        console.log("The telephone is wrong but the mail is right");
    }
    else{
        console.log("The telephone and the mail are both wrong!");
    }
    return this;
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
function testRedundancy(str) {
    let patt = /\b([a-z]+) \1\b/ig;
    let set = new Set();
    let i = 0;
    for(let item of str.match(patt).sort()){
        if(i<10){
            set.add(item);
            i++;
        }
        else break;
    }
    console.log(set);
    return this;
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
function testKeyBoard(wantInput, actualInput) {
    let set = new Set();
    for(let i=0,j=0;i<wantInput.length;i++){
        if(wantInput.charAt(i).toUpperCase()!=actualInput.charAt(j).toUpperCase()){
            set.add(wantInput.charAt(i).toUpperCase());
        }
        else j++;
    }
    console.log(set);
    return this;
}

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
②请使用Array。
③使用console.log打印即可，将该字符串打印出来。
④只能显式使用一次循环。
⑤str为字符串。
*/
function testSpecialReverse(str) {
    let array = new Array();
    array = str.trim().split(" ").reverse();
    let res= "";
    for(let item of array){
        if(item!=""){
            res = res + item + " ";
        }
    }
    console.log(res.trim());
    return this;
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
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],i);
        let res = target - nums[i];
        if(map.has(res)){
            console.log("[ "+map.get(res)+","+i+" ]");
        }
    }
    return this;
}


/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map();
    let temp = "";
    let start = 0;
    let max = 0;
    for(let i=0;i<str.length;i++){
        let char = str.charAt(i);
        if(map.has(char)&&map.get(char)>=start){
            temp = str.substring(map.get(char)+1,i+1);
            start = map.get(char)+1;
        }
        else{
            temp = temp+char;
            max = (temp.length>max)?temp.length:max;
        }
        map.set(char,i);
    }
    console.log(max);
    return this;
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
function Country(name) {
    this.name = "国家";
}
function DevelopingCountry(){
    Country.call(this);
    this.sayHi = function() {
        console.log("Hi,i am a developing country.");
    }
}
function PoorCountry() {
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.saySad = function () {
    console.log("I am a sad poor country.");
}
let country = new Country();
function DevelopedCountry() {
    return Object.create(country, {
        sayHappy: {
            value: function () {
                console.log("I am a Happy developed country.")
            }
        }
    })
}

(function() {
    console.log("1: testMail(13681981193,\"1224490953@qq.com\")");
    testMail(13681981193,"1224490953@qq.com");
    console.log("2: testRedundancy(\"Is is the iS is cost of of gasoline going up up\")");
    testRedundancy("Is is the iS is cost of of gasoline going up up");
    console.log("3: testKeyBoard(\"7_This_is_a_test\",\"_hs_s_a_es\")");
    testKeyBoard("7_This_is_a_test","_hs_s_a_es");
    console.log("4: testSpecialReverse(\"  hello  world!  \")");
    testSpecialReverse("  hello  world!  ");
    console.log("5: twoSum([1,2,3,4],5)");
    twoSum([1,2,3,4],5);
    console.log("6: lengthOfLongestSubstring(\"aabbccbabc\")");
    lengthOfLongestSubstring("aabbccbabc");
    console.log("7: 继承")
    let country1 = new DevelopingCountry();
    let country2 = new PoorCountry();
    let country3 = DevelopedCountry();
    country1.sayHi();
    country2.saySad();
    country3.sayHappy();
    console.log("8: testTime()");
    let test = testTime();
    test;
})();