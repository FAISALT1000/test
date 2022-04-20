
if(confirm("do you want to play?")){
    const w=prompt(" Enter the amount you wan print :");
    play(w);
}

function play(w){
    const x=prompt('Enter a number:');
    for(let i=1;i<=w;i++){
        if(x==i){
            console.log(i+" is my number");
            continue;
        }
        console.log(i);
    }}