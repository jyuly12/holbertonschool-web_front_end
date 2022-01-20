function changeMode(size, weight, transform, background, color){
    return function change(){
        let body = document.querySelector("body");
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    } 
}

function main() {
    let spooky = () => changeMode( 9 , "bold", "uppercase", "pink", "green");
    let darkMode = () => changeMode( 12, "bold", "capitalize", "black", "white");
    let screamMode = () => changeMode( 12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    let content = document.createTextNode("Welcome Holberton!");
    p.appendChild(content);

    let spooky_btn = document.createElement("button");
    spooky_btn.innerHTML = "Spooky";
    document.body.appendChild(spooky_btn);
    spooky_btn.onclick = spooky();

    let dark_btn = document.createElement("button");
    dark_btn.innerHTML = "Dark mode";
    document.body.appendChild(dark_btn);
    dark_btn.onclick = darkMode();

    let scream_btn = document.createElement("button");
    scream_btn.innerHTML = "Scream mode";
    document.body.appendChild(scream_btn);
    scream_btn.onclick = screamMode();
}

main();