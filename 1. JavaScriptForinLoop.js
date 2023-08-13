function printObjectProperties (myObj){
    if(Object.keys(myObj).length === 0){
        console.log('Object is empty');
    }else{
        for(let takeValue in myObj){
            console.log(takeValue+': '+myObj[takeValue]);
        }
    }
}

printObjectProperties({name:'mehedi',ssc:'2016',hsc:'2018',isStudent:true});