
//该页面是【扩展程序选项】的js代码

//获取to选择框
let toSelect = document.querySelector('#to')

//使用chrome storage get API,获取存储进去的 sl(source language) tl(target language)
chrome.storage.sync.get(['tl'], function(result) {

    //如果有存储过 target language
    if (result.tl) {
        //把值赋值给页面上的to选项
        toSelect.value = result.tl.value
    }

    //to选项的值改变的时候
    toSelect.onchange = function() {
        let key = this.selectedOptions[0].getAttribute('data-key')
        chrome.storage.sync.set({'tl': {key: key, value: this.value}}) // 注册到google的存储
    }
    
})