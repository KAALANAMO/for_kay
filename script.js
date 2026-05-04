body {
margin:0;
font-family: serif;
background:black;
color:white;
}

.section {
position:absolute;
width:100%;
height:100%;
display:none;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
}

.active { display:flex; }

.bg {
position:absolute;
width:100%;
height:100%;
background:url("assets/special/bg1.png") center/cover;
filter:blur(3px) brightness(0.5);
}

.modal {
z-index:2;
background:rgba(0,0,0,0.7);
padding:20px;
border-radius:10px;
}

button {
margin:10px;
padding:12px 20px;
border:none;
border-radius:20px;
background:#7C0116;
color:white;
}

img {
width:80%;
max-height:60vh;
object-fit:cover;
border-radius:10px;
}

.actions {
display:flex;
flex-wrap:wrap;
justify-content:center;
}

.court {
background:url("assets/special/cr_1.jpeg") center/cover;
padding:20px;
}

.letter {
background:url("assets/special/bg4.jpeg") center/cover;
padding:20px;
}
