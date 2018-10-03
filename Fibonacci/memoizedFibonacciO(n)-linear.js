function fibMemo(index, cache) {
    //index: index of number in fibonacci sequence
    //cache: an array used as memory
    /** Step through:
     * if(4 < 3)
     *  return 1;
     * else
     *  cache[index] = fibMemo(4 - 1, cache) + fibMemo(4 - 2, cache);
     *  OR: cache[index] = fibMemo(3, cache) or [2] + fibMemo(2, cache) or [1];
     *  cache[3] = 2 stored in cache.
     * **/
    cache = cache || [];
    if(cache[index]) {
        //console.log(cache[index]);
        return cache[index];
    }else{
        if(index < 3) {
            return 1;
        }else{
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    }
    return cache[index];
}

console.log(fibMemo(10));
