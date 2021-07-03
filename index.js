function testResults(form) {
    var credits = [20,20,22,22,22,23,22,20]
    var result = 0 ;
    var sum = 0 ; 
    var total_credits = 0 ;
    var flag = 1; 
    var invalid_cg = 0 ;
    for( var i=0;i<form.inputbox.length;i++){
        var cg =  form.inputbox[i].value ; 
            if(cg>10){
                flag=0;
                invalid_cg = cg ; 
            }
            if(cg.length==0){
                cg=0;
                console.log("the user has left this field empty!")
                //total_credits-=credits[i];
            }
            else if(cg==0){
                console.log('0 cpga?????????'); 
            }
            else{
                total_credits+=credits[i];
                console.log(cg);
            }
        result+= credits[i]*cg;
        sum+= parseFloat( cg) ;
    }
    
    console.log(total_credits)
    if(flag==1)
        alert("Aggregate CG: " + result/total_credits);
    else
        alert(`INVALID CG ENTERED!!!!!!!!!!! ${invalid_cg} is not valid!!!!!!!!!!!!`);
}
// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)