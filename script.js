const memories = [
{img:"assets/memories/m1_east7.jpeg", text:"You remember that day…"},
{img:"assets/memories/m2_juhu.jpeg", text:"That place felt different…"},
{img:"assets/memories/m3_dnj.jpeg", text:"You were glowing that night…"}
];

const punishImgs = [
"assets/punish/p6_laugh.jpeg",
"assets/punish/p5_feed.jpeg",
"assets/punish/p4_bomb.jpeg",
"assets/punish/p7_ignore.jpeg",
"assets/punish/p2_sad.jpeg"
];

let skipCount = 0;
let memIndex = 0;
let punishCount = 0;

function show(id){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

function start(){
document.getElementById("music").play();
show("memories");
playMem();
}

function skip(){
skipCount++;
const btn = document.getElementById("skipBtn");

const texts = [
"okay fine, your loss",
"...are you sure?",
"Kay. Kay. KAY.",
"i'll cry 😭",
"okay I'm dragging you in"
];

btn.innerText = texts[skipCount-1] || texts[4];
btn.classList.add("shake");

if(skipCount >= 5) start();
}

function playMem(){
if(memIndex >= memories.length){
show("punish");
return;
}

document.getElementById("memImg").src = memories[memIndex].img;
document.getElementById("memText").innerText = memories[memIndex].text;

memIndex++;
setTimeout(playMem, 3000);
}

function doPunish(i){
document.getElementById("punImg").src = punishImgs[i];
punishCount++;

if(punishCount >= 4){
playCourt();
}
}

function playCourt(){
show("courtroom");

const scenes = [
`ERROR 404

CASE: TRUST VS LIE`,

`VERDICT:

GUILTY OF HURTING HER
AND DESTROYING HER TRUST`,

`This court, having reviewed all evidence—

including one catastrophic lie,
one heartbroken sweet potatoo,
and the undeniable fact that
he’s been an absolute idiot—

hereby declares:

GUILTY AS CHARGED.`,

`However…

This court has also reviewed Exhibit B:
his heart.

Which belongs entirely to Ms. Kay.`,

`SENTENCE:

Lifetime probation in her custody,
to protect her heart.`,

`He is still,
completely,
irreversibly—

in love with her.`
];

let i = 0;
const text = document.getElementById("courtText");
const btn = document.getElementById("courtBtn");

function next(){
if(i >= scenes.length){
btn.style.display = "block";
return;
}

```
text.innerText = scenes[i];
i++;
setTimeout(next, 3500);
```

}

next();
}

function showLetter(){
show("letter");

document.getElementById("letterText").innerText = `You know… I never imagined I would see you at your worst.
And I never thought that one lie from me could hurt you this deeply.

I’ve learned my lesson.
I know that one mistake of mine damaged so many beautiful memories we created.
But I will keep rebuilding them… so that one day, you never regret calling me your friend.
Your friendship is a blessing to me. Your presence means everything in my world.

You made me understand what it feels like to care for someone this deeply.
And none of this is effort… or strategy… or anything fake.

This is just me with you. Your smile is so addictive…
I can do anything just to see it again.

Even I don’t understand how I became this invested…
But whatever this is, it’s real.
You once said I’m good with words. Maybe.
But you made me better with actions.

Now I’ll prove everything, not say it. You’ve taught me what love is… what friendship is…
And how one lie can destroy trust.

I owe you more than I can explain.

I’m not asking for anything in return.
I’m just… here. Selflessly.

Even if this feels too good to be true, let it be.
Because it is true.

And I promise you —
You will never regret trusting me again.
Even if life changes…
Every second with you will always be worth it.

You are my short timing…
But my best timing.

And until you’re here —
I’ll make sure you never regret it.

I pizza you, Kay.
I adore you, Duggu.

— Your Gadhéra,
— Vika`;
}
