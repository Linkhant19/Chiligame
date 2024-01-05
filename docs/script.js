var direction = Math.random() < 0.5 ? "left" : "right";
var number = Math.floor(Math.random() * 10);

const counters = {};

function impression() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    return "What was your first impression of the person sitting to your " + direction + "?";
}

function slaporkiss() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    var direction1 = Math.random() < 0.5 ? "left" : "right";
    var number = Math.ceil(Math.random() * 7);
    var number1 = Math.ceil(Math.random() * 7);
    return "I dare you to slap the person to the " +number+ " space to your " + direction + " of you or kiss the person to your " +number1+ " space to your " + direction1 + ".";
}

function flirt() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    var number = Math.ceil(Math.random() * 7);
    return "Flirt with the person on your " +number+ " space to your " + direction + " for 2 minutes.";
}

function askout() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    var number = Math.ceil(Math.random() * 7);
    return "Pretend like you like the person on your " +number+ " space to your " +direction+ " and ask them to be your girlfriend/boyfriend.";
}

function dance() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    var number = Math.ceil(Math.random() * 7);
    return "Perform strip dance (only strip to what you are comfortable) on the person to your "+number+ " space to your " +direction +".";
}

function draw() {
    var direction = Math.random() < 0.5 ? "left" : "right";
    var number = Math.ceil(Math.random() * 7);
    return "Let the person on your "+number+ " space to your " +direction +" draw on your face.";
}

//list1 = 37
//list2 = 40
//list3 = 28
//list4 = 36





const list1 = ["What do you regret? Can be a small regret.", "Do you have a son?", "Would you rather have 9 fingers or 11 fingers?", "What is the worst thing you have ever said to anyone?", "What is the worst thing anyone has ever said to you?", "When was the last time you broke someone's heart? How?", "What are 3 things you are thankful of right now?", "What is your favorite Harry Potter House?", "'Get out of jail free card'. You can use it to avoid penalty for one question.", "What superpower would you like to have?", "What did you eat for lunch today?", "What age do you think would be your peak and why?", "Do you believe in true/unconditional love?", "What is your favorite movie?", "Who in this room would be your one phone call if you were in jail?", "What is that one thing you would never do for all the money in the world?", "Who was your first love?", "Have you ever cheated in an exam?", "What are your thoughts on polyamory?", "What’s favorite type of chocolate?", "What is something you regret doing when you were a kid?", "How many crushes have you had since high school?", "For every month you go vegan, you get 1,000. Are you willing to do it? If so, how long would you do it for?", "What’s one thing you regret?", "What was your first kiss like?", "Do your prefer giving or receiving?", "What is the meanest thing you did to someone?", "What's the first thing you want to do when you start to get tipsy?", "How was your day?", "what's your love language?", "Are you content with life right now?", "if you could commit any crime and get away with it, what would it be?", "Where would you want to bring your partner on your first date?", "Do you feel comfortable farting near your close friend?", "What do you want your life to look like in 5 years?", "Do you prefer a short but fulfilling life or a long and boring one?", "Do you believe in love at first sight?", impression];
const list2 = ["What is your social security number?", "What was the last lie you've told?", "Who here would you go on a date with?", "Whose ex would you go for if you have to?", "Who is the person you don't have feelings for but can't stop thinking about?", "Expose somoething someone has done here but don't say who.", "Who hurt you the most?", "What is the biggest lie you've told anyone here that they don't know about?", "Have you ever heard a rumor about anyone here? If so, what is it?", "Are you a butts or boobs person? or thighs?", "Whose food is the best tonight?", "Would you break up with someone if you know they cannot have kids?", "If you know you would never see people here again in your life, would you still try to keep in touch?", "If everyone here is drowning and you can only save one person, who would you save?", "Assign couples to everyone in the room with each other.", "What was your first heartbreak?", "If you had one week to live and you had to marry someone in this room, who would it be?", "Name one thing you'd change about every person in this room.", "If you have to switch lives with someone here forever, who would you choose?", "When was the last time you cried? Why?", "Name a time you think you were a bad partner or friend.", "What's the best piece of advice you've been given?", "What's the worst thing anyone's ever done to you?", "Have you ever stayed friends with someone because it benefitted you beyond just the friendship?", "What's the worst birthday experience you've ever had?", "Who's the last person you searched on Instagram?", "What's your idea of a perfect date?", "What fashion sense do you find hot?", "In all honestly, do you enjoy smelling your own fart?", "Do you have a crush on someone currently?", "Something that's an immediate turn off when looking for a partner.", "From a scale of 1-10, how satisfied are you with your friends?", "From a scale of 1-10, how satisfied are you about yourself?", "What's one of the hottest fantasies you've had had of one of the people you know?", "Between the people sitting directly to your left and right, If you could save only one from certain death, who would it be?", "Describe the person you last found attractive in details.", "If you have to date someone in the room, who would it be?", "Have you ever doubted your sexuality?", "What’s one thing you would do that’s morally wrong?", "What's the most scandalous text you've ever sent or received?Show?"];
const list4 = ["You get free 5 points.", "You lose 2 points.", "Wash the dishes.", "Get JJ to tell Lin tea about who he is smiling about.", "Rank everyone in order of how likely they are to succeed in life.", "Let the person next to you wax you wherever they want.", "Give a personalised insult to everyone in the room.", "Attempt the first TikTok dance on your for you page.", "Reply to the first five Instagram Stories on your timeline.", "Put your clothing on backwards for the rest of the evening.", "Scroll through your phone book until someone says stop. You either have to call or block that person.", "Smell another player's armpit.", "Say two honest things about everyone else in the group", "Meow instead of speaking until it's your next turn.", "Keep three ice cubes in your mouth until they melt.", "Let the group look in your Instagram DMs.", "Eat three spoonfuls of limejuice", "Eat a raw piece of garlic.", "Prank call someone of the group's choosing.", "Change your profile picture to something nsfw for a day.", "Plank for 2 minutes.", "Have another player send any text to any person in your Instagram friendlist.", "Let the person to your right post something of their choosing on your Instagram.", "Lick somebody of the group's choosing anywhere.", "Get close face to face with a person of the group's choosing and make eye contact with them for 1 minute.", "Give everyone a hug!", "Choose two people and show them an Instagram page of someone you have a crush on (or you find attractive).", "Choose one person and let them cut some of your hair.", "Rate everyone in the room 1-10 by looks honestly.", "Hold water in mouth. Don’t laugh for a minute while others try to make you laugh without touching.", "Imitate a cartoon character", "Take 3 shots.", "Bark 5 times and say “I am a good boy.”", slaporkiss, flirt, dance, askout, draw];

function getRandomQuestion(list) {
    const item = list[Math.floor(Math.random() * list.length)];
    return typeof item === "function" ? item() : item;
}

document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('displayArea').innerText = getRandomQuestion(list1);
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('displayArea').innerText = getRandomQuestion(list2);
});

document.getElementById('button4').addEventListener('click', function() {
    document.getElementById('displayArea').innerText = getRandomQuestion(list4);
});

document.addEventListener('mousemove', function(e) {
    let trail = document.createElement('div');
    trail.className = 'trail';
    document.body.appendChild(trail);
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    setTimeout(() => {
        document.body.removeChild(trail);
    }, 300); 
});
