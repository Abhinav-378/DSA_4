function transpose(arr){
    let transposeArr=arr
   
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            transposeArr[i][j]=arr[j][i]
        }
    }
    return transposeArr
}

let arr=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr)
console.log(transpose(arr))