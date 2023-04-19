
const pseudo = prompt("C'est quoi ton blaze")
const greet = document.querySelector('.hello')
if (pseudo) {
    if (pseudo.indexOf('Alex') !== -1) { greet.textContent = `Hello ma blondie fait attention à l'ours !!!` }
   else if(pseudo.indexOf('Jo') !== -1){greet.textContent = `Salut mon Jo fait attention à l'ours !!!`}
   else if(pseudo.indexOf('Kalin') !== -1){greet.textContent = `Coucou Kalinette fait attention à l'ours !!!`}
   else if(pseudo.indexOf('Max') !== -1){greet.textContent = `Bonjour Maximus fait attention à l'ours !!!`}
    else { greet.textContent = `Hello ${pseudo} !!!` }
}
else { greet.textContent = `Hello Anonymous player !!!` }

    // export {pseudo}

