'use strict';
class Folders {
    constructor(count = 5) {
        this.count = count;
        this.folders = [];
        this.createArray();
    }
    createArray() {
        for(let i = 1; i < 8; i++) {
            let name = `${i}`;
            let obj = {
                name: `name ${name}`,
                url: `url ${name}`
            };
            this.folders.push(obj);
            let sub = this.createSubArray(name, this.count);
            if(sub.lenght != 0) {
                this.folders.push(sub);
            }
        }
    }
createSubArray(str, num) {
    let limit;
    do{
        limit = Math.round(Math.random() * 8);
    } while(num === this.count && limit < 3);
    let subarray = [];
    num--;
    for(let i = 1; i < limit; i++) {
        let name1 = `${str}.${i}`;
        let obj1 = {
            name: `name ${name1}`,
            url: `url ${name1}`
        };
        subarray.push(obj1);
        if(num) {
            let subsub = this.createSubArray(name1, num);
            if(subsub.lenght > 1) {
                subarray.push(subsub);
            }
        }
    }
    return subarray;
}
}