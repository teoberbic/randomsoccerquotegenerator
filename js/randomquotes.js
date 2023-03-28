function generatequote() {
    const quotes = [
      {
            quote: "The players are writing a beautiful page of French football history." ,
            author: "Didier Deschamps"
        } , 
        {
            quote: "I have to keep working hard and playing well because I dont like to be second or third: theyre the worst places to be. You would be proud, of course, because it means youre on the way, but you want to finish first." ,
            author: "Paul Pogba"
        } , 
        {
            quote: "God gives gifts to everyone, some can write, some can dance. He gave me the skill to play football and I am making the most of it." ,
            author: "Ronaldinho"
        } , 
        {
            quote: "Talent without working hard is nothing" ,
            author: "-Cristiano Ronaldo"
        } , 
        {
            quote: "Everything is practice." ,
            author: "Pele"
        } 
    ];

    let currentquote = Math.floor(Math.random() * quotes.length);

    document.getElementById('quotation').innerHTML ='&quot;' + quotes[currentquote].quote + '&quot;' ;
    document.getElementById('author').innerHTML = "-" + quotes[currentquote].author;


}

window.onload = function() {
    generatequote();
    document.getElementById("generate").addEventListener("click", generatequote())

}
