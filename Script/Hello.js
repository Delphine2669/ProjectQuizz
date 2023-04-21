
const pseudo = prompt("C'est quoi ton blaze")
const greet = document.querySelector('.hello')
if (pseudo) {
    if (pseudo.indexOf('Alex') !== -1) { greet.textContent = `Hello ma blondie fait attention au lapin de pâques !!!` }
   else if(pseudo.indexOf('Jo') !== -1){greet.textContent = `Salut mon Jo prend garde au lapin de pâques !!!`}
   else if(pseudo.indexOf('Kalin') !== -1){greet.textContent = `Coucou Kalinette prends soin du lapin de pâques !!!`}
   else if(pseudo.indexOf('Max') !== -1){greet.textContent = `Bonjour Maximus ne braque pas le lapin de pâques !!!`}
    else { greet.textContent = `Hello ${pseudo} !!!` }
}
else { greet.textContent = `Hello Anonymous player !!!` }

    // export {pseudo}

