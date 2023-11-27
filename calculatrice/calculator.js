// alert('js running'); pour verifier js est travailler


//?--------------------------variable-------------------------------//

var screen= document.getElementById("screen");
var queue = [];
var input = 0;
var haveDot=false;


//?--------------------------------fonction-----------------------

                       //!pour laffichage
function display(num) { 
screen.value +=num;
input +=num;//bach input t3mar
console.log(`input dand laffichage : ${input}`);

}
                        //!pour laffichage
function sup(){
    screen.value = screen.value.slice(0,-1)
    input = input.slice(0,-1);
    

}
function dot(){
    if(haveDot === false){
        display('.');
        haveDot=true
    }
}
                         //!pour effacer 
function clearScreen(){ 
    screen.value="";
    input = 0;
    queue = [] ;
    haveDot=false;
    console.log(`input dand  : ${input}`);
}
                        //!pour les opertation
function traiter(arg){ 
        if (input !== 0 ){
            screen.value+=arg;
            input=parseFloat(input);
            queue.push(input);
            queue.push(arg);
            switch(arg){
                case '-':
                case '+':
                case '*':
                case '/':
                case '%':
                    haveDot=false;
                    break;
            }
            input=0;
            console.log(`queue quant faire traiter : ${queue}`);
            console.log(`input dand laffichage : ${input}`);
        }
}
                              //!pour calculer le resultat
function calculer(queue) {
            if (input !== 0){

                input = parseFloat(input);
                queue.push(input);
                console.log(`queue quant faire calculer : ${queue}`);
                console.log(`input dans calculer : ${input}`);
            }
            console.log(`queue ${queue}`)
            console.log(`lenght : ${queue.length}`);
            console.log(`lenght : ${queue.length}`);

            var zero = true //!zero li rdi n9sam 3lih mkynch ;
            for (var i = 2 ; i < queue.length ; i++) {
                
                console.log(`index : ${queue[i]}`);
                switch(queue[i-1]){
                    case "+" : 
                    queue[0] += queue[i]
                    break;

                    case "-" : 
                    queue[0] -= queue[i]

                    break;

                    case "*" : 
                    queue[0] *= queue[i]

                    break;
                    case "/" : 
                    console.log(`zeeeeero index : ${queue[i]}`);

                    if (queue[i] == 0){
                        zero = false; 
                            clearScreen();
                            queue[0] = 'ERROR'
                        console.log('hhhhiihhh')
                        
                    } else {
                    queue[0] /= queue[i];
                    screen.value=queue[0];
                 }
                    break;
                    case "%" : 
                    queue[0] %= queue[i]

                    break;



                
                }
                console.log(`the resultat : ${queue[0]}`);
                screen.value=queue[0];
            }
           
            } 
            console.log(`lenght : ${queue.length}`);

            
 