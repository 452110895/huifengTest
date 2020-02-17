function q1(arr) {
    if (Object.prototype.toString.call(arr) != "[object Array]") {
        return;
    }
    let numObj = {
        "0": [],
        "1": [],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        "*": [],
        "#": [],
    }
    let temp = [];
    let result = [];
    let len = 0;

    for (let i in arr) {
        if (numObj[arr[i]] != undefined && Object.prototype.toString.call(numObj[arr[i]]) == "[object Array]") {
            temp.push(numObj[arr[i]]);
        }else{
           //如果大于10
            let bigArr =  _handleBigNum(arr[i]+"");
            if(bigArr.length > 0){
                temp.push(bigArr);
            }
        }
    }
    len = temp.length;
    if(len>1){
        temp.map((key, index) => {
            if (index < len) {
                for (let j = index + 1; j < len; j++) {
                    let _res = _handle(temp[index], temp[j]);
                    result = result.concat(_res);
                }
            }
        })
    }else if(len == 1){
        result = temp[0];
    }

    console.log("参数:", arr, "\n结果:", result.join(" "), "\n");
    return result.join(" ");

    function _handle(arra, arrb) {
        let result = [];

        if (Object.prototype.toString.call(arra) == "[object Array]" && Object.prototype.toString.call(arrb) == "[object Array]") {
            arra.map(itema => {
                arrb.map(itemb => {
                    result.push(itema + itemb);
                })
            })
        }
        return result;
    }

    //处理大于10的数
    function _handleBigNum(num){
        let result = [];
        if(Object.prototype.toString.call(num) != "[object String]"){
            return result;
        }
        let arr = num.split("");
        arr.map(item=>{
            if (numObj[item] != undefined){
                result = result.concat(numObj[item]);
            }
        })
        return result;
    }
}

q1([2, 35]); //ad ae af aj ak al bd be bf bj bk bl cd ce cf cj ck cl
q1([2, 3]); //ad ae af bd be bf cd ce cf
q1([2, 3, 4]); //ad ae af bd be bf cd ce cf ag ah ai bg bh bi cg ch ci dg dh di eg eh ei fg fh fi 
q1([9]); //w x y z 