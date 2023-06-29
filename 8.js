function coords(arr){
    let coordArr=[]
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            coordArr[i]=arr[Math.floor((i+1)/2)]
        }
        else{
            coordArr[i]=arr[(arr.length/2)+Math.floor((i-1)/2)]
        }
    }
    return coordArr
}


let arr=[1,3,5,2,7,4,8,9]

console.log(coords(arr))
