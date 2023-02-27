let media=0
let students = [
    {
        name: "Wagner",
        test1: 8,
        test2: 9,
    },

    {
        name: "Roberto",
        test1: 7.5,
        test2: 9,
    },

    {
        name: "Rodrigo",
        test1: 6,
        test2: 5,
    }
]

function average(grade1, grade2){
   return ((grade1+grade2)/2)
}

function printMsg(student){
    let msg
    if(media>7){
        msg = (`A média do(a) aluno(a) ${student.name} é: ${media}\nParabéns, ${student.name}! Voce foi aprovado(a) no concurso!`)
    }else{
        msg = (`A média do(a) aluno(a) ${student.name} é: ${media}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }
    return(msg)
}

for(student of students){
    media = average(student.test1, student.test2)
    media = media.toFixed(1)
    let result = printMsg(student)
    alert(result)
}