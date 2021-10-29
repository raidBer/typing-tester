let text= 'Chaos isn\'t a pit. Chaos is a ladder, Many who try to climb it fail, and never get to try again, the fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love ... illusions. Only the ladder is real, the climb is all there is'


let past = ""
let future = ""

let i=0
let mistakes=0
let ok = false

let reloadtext = (past, future) => {
    document.getElementById('past').innerHTML= past
    document.getElementById('future').innerHTML= future
}

reloadtext('',text)

document.getElementById('text').addEventListener('click', () => {
    document.getElementById('P').focus()
})

document.querySelector('#P').addEventListener('keypress', (event) => {
    document.getElementById('wrong-letter').style.opacity=0
    ok = false

    if (event.key === text[i]){

        past=text.slice(0,i+1)
        console.log(past)

        future =text.slice(i+1,text.length)
        console.log(future)

        if (text[i]===' '){ok =true }

        ++i

        reloadtext(past,future)
    
    } else {
        document.getElementById('wrong-letter').style.opacity=1
        mistakes++
        document.getElementById('mistakes').innerHTML=`Mistakes = ${mistakes}`
    }

    if (event.key===' ' && ok){
        document.querySelector('#P').value=''
    }

})

