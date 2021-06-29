function testResults(form) {
    var credits = [20,20,22,22,22]
    var result = 0 ;
    var sum = 0 ; 
    for( var i=0;i<form.inputbox.length;i++){
        var cg =  form.inputbox[i].value ; 
        console.log(cg) ;
        result+= credits[i]*cg;
        sum+= parseFloat( cg) ;
    }
    console.log(sum)
    alert("Aggregate CG: " + result/106);
}

