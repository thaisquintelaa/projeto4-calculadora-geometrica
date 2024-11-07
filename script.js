do {
    let menu =`
    Formas geometrica : 
    
    1-área do triângulo   
    2-área do retângulo
    3-área do quadrado
    4-área do trapézio
    5-área do círculo
    6-sair
    `;

    switch (formas) {
    case '1':
        function triangulo (a,b){
            let a=pareInt(prompt('Digite a base do triangulo'))
            let b=parseInt(prompt('Escreva a altura do retangulo'))
            let result= a * b / 2
            let result1
        }
    case '2' :
        function retangulo (c,d){
             let result2= c * d
             return result2
        }
        case '3' :
        function quadrado (){
            let lado= parseInt(pronpt('Digite o lado do quadrado'))
            let result3= lado *2
            return result3
        }
        case '4' :
        function trapézio (e,f,g){
            let e= parseInt(prompt('Digite a base maior do seu trapezio'))
            let f= parseInt(prompt('Digite a base menor do seu trapezio'))
            let g= parseInt (prompt('Digite a altura do seu trapezio'))
            let result4= (e+f)*g/2
            return result4 
        }
        case '5' :
            function circulo (h)
            let h =pareInt(prompt('Digite o raio do seu circulo'))
        }
    }
}while (true )