let storageData= document.querySelector("#storage-data");
class WebStorage{
    // 设置过期时间
    
    constructor(){
        this.instance = null;
    }
    static getInstance(){
        if(!this.instance){
            this.instance = new WebStorage();
        }
        return this.instance;
    }
    /**
     * 设置本地缓存
     * @param {String} key 键
     * @param {String} value 值
     */
    setStorage(key,value){
        if(key !==undefined && value !==undefined){
            localStorage.setItem(key,value);
        }
        this.showStorage(flag);
    }
     /**
     * 显示本地所有缓存
     */
    showStorage(flag){
        if(flag){
            if(localStorage.length)
                storageData.innerHTML='';
            for (let i = 0; i < localStorage.length; i++) {
                var keyName = this.getStorageKey(i);
                var value = this.getStorageValue(keyName);
                storageData.innerHTML+=
                "<dt>"+"keyName："+keyName+"</dt>" +"<dd>"+"value："+value+"</dd>"
            }
        }
        else{
            storageData.innerHTML=
            "<dt>"+"数据输入错误"+"</dt>" 
        }
    }
    /**
     * 获取某个键
     * @param {number} index 索引
     */
    getStorageKey(index){
        return localStorage.key(index);
     }
     /**
     * 显示本地缓存的某个键的值
     * @param {String} key 键
     */
    getStorageValue(key){
       return localStorage.getItem(key);
    }
     /**
     * 删除缓存中的某个键
     * @param {String} key 键
     */
    deleteStorage(key){
        localStorage.removeItem(key);
    }
    /**
     * 清除本地缓存
     * @param {String} key 键
     */
    removeAllStorage(){
        localStorage.clear();
        storageData.innerHTML = '<div class="alert alert-success">清空了 localStorage 数据！</div>';

    }
}