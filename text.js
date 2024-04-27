var story;
function getStory(name) {
  return {
    currentScene: "attack",
    attack: {
      title: "Chapter 1",
      story: `You awake in an empty classroom, you are Kazuki Ryuusen. It’s the afternoon with the soft golden light reflecting off your desk and warm breeze. It’s peaceful. It’s always been peaceful. You realize that you’ve always gone with the flow, someone in the background, not someone to stand out. You are someone of no significance, would anyone even know if you just suddenly disappeared? Who would go looking for you? What impact have you made? ….. It’s late, go home, get some rest, you can think about it later..it’ll all be okay.${name}.`,
      image: "classroom.jpg",
      choices: [
        {
          choice: "Leave",
          destination: "classroom",
        },
      ],
    },
    classroom: {
      title: "The epic battle for Cute Puppistan!",
      story: `You’re about to leave the classroom, the serenity of it all and the thoughts. As you reach for the doorknob, you lose grip and.. Teleport? It feels like falling…`,
      image: "classroom.jpg",
      choices: [
        {
          choice: "Die while teleporting.",
          destination: "Death",
        },
        {
          choice: "Proceed with teleportation.",
          destination: "Proceed",
        },
      ],
    },
    Death: {
      title: "Back at home!",
      story: "End: 50/50 percent chance. Sorry.",
      image: "lolGrave.jpg",
      defaultDestination: "classroom",
      buttonText: "Let's try this again",
    },
    Proceed: {
      title: "something",
      story:
        "Wait, what's that over there? Three spirits? They look like an elf, a fairy, and a regular human? Look, they’re trying to merge with you, Kazuki, merging with them will guarantee a safe teleport. ",
        image: "orbs.jpg",
        choices: [
        {
          choice: "Elf",
          destination: "Elf",
        },
        {
          choice: "Fairy",
          destination: "Fairy",
        },
        {
          choice: "Human",
          destination: "Human",
        },
      ],
    },
    Elf: {
      title: "First Choice",
      story: "You have longer ears, and you feel a surge of power.",
      image:"forestWaterFall.jpg",
      defaultDestination: "ATM",
      buttonText: "Good Pick.",
    },
    Fairy: {
      title: " Second Choice",
      story:
        "You have wings and.. Antennas…? You sense a greater feeling towards nature.",
      image:"crystal.jpg",
        defaultDestination: "ATM",
      buttonText: "Wow, you shrunk bro.",
    },
    Human: {
      title: "Third Choice",
      story:
        "You’re the same as you were, you just didn’t want to be a cool mythical creature but alright.",
        image: "humans.jpg",
        defaultDestination: "ATM",
      buttonText: "You're really boring.",
    },
    ATM: {
      title: "ATM",
      story:
        "Something speaks to you in your head, oh wait, this is in your head, haha! Hello, I am a system, your Auto Technical Memory, or ATM for short, I will guide you on this adventure. You feel ground beneath you, it’s a soft red carpet. As your eyes trail this carpet along the marble floor you find a king at the end of it.. He seems powerful and cocky. Then he says, “Kazuki Ryuusen from across the universe, I am King Idgris, please follow my commands and train to fight in this way, I promise you great glory and a safe return home.” A chance to become someone useful? A chance to become a hero> No. An opportunity to save this world.",
        image: "ATM.jpg",
        choices: [
        {
          choice: "No",
          destination: "No",
        },
        {
          choice: "Yes",
          destination: "Yes",
        },
      ],
    },
    No: {
      title: "Choice No",
      story:
        "The king was not pleased with your answer, he has no use for you so he signals his guard to kill you. As a sword pierces your heart, you die feeling the sharp pain of the blade.",
      image:"longHall.jpg",
        defaultDestination: "ATM",
      buttonText: "Gotta start pver again. Sorry.",
    },
    Yes: {
      title: "Correct Choice",
      story:
        "The king is pleased and tells one of his knights to guide you to the knights quarters. You finally got the opportunity to be someone, and you took it. The first thing you do when you’re at the quarters is get into gear and spar a rookie.",
        image:"longHall.jpg",
        choices: [
        {
          choice: "Strike First",
          destination: "Lost",
        },
        {
          choice: "Play Defensively",
          destination: "Dang",
        },
      ],
    },
    Lost: {
      title: "Strike First",
      story:
        "They blocked your attack and slashed at you! You’re injured! You are damaged and he has the upper hand, the moment he lunged toward you, you lost.",
        image: "training.jpg",
        defaultDestination: "loser",
      buttonText: "Wowwwwww ok",
    },
    Dang: {
      title: "Play Defensively",
      story:
        "They striked first but it was pretty weak, maybe they’re getting a feel of the battle? You then strike against his wooden sword and he blocks and hits you. You lost.",
        image: "training.jpg",
        defaultDestination: "loser",
      buttonText: "Isn't this just so fun.",
    },
    loser: {
      title: "Can't believe you lost.",
      story:
        "Wow, you lost against a rookie, maybe they chose the wrong hero. Kidding of course, don’t lose hope just because you lost once in something you never experienced before. OK, let’s train. First thing we should do is fight some slime, they’re weak but you’ll get a good feel of the battlefield.",
        image: "training.jpg",
        choices: [
        {
          choice: "Find Slimes",
          destination: "Slimes",
        },
        {
          choice: "Go off trail",
          destination: "wrongWay",
        },
      ],
    },
    Slimes: {
      title: "Finding the slimes.",
      story:
        "The slimes are cute, but don’t fall for it, they’re an extremely invasive species that adapt to any environment and eat everything. Even life forces if there’s enough of them. Remember, you’re only here to gain experience. Let’s start slow and follow the trail to the slime patch.",
      buttonText: "Go follow the trail",
      image:"slimeForest.jpg",
      choices: [
        {
          choice: "Follow the trail",
          destination: "Followingdirections",
        },
      ],
    },
    Followingdirections: {
      title: "Found the slimes.",
      story:
        "Wow there’s a lot of slimes here, don’t worry though, even a kid could fight them. Just be careful where you step and stay on guard of your surroundings. ",
      image:"slimeField.jpg",
        choices: [
        {
          choice: "Kill Slime",
          destination: "Killslime",
        },
      ],
    },
    Killslime: {
      title: "Killing slimes",
      story:
        "You slay the slimes and get a better understanding of fighting. You sense a better feeling of the sword, the flow of your strikes and slashes becoming one with your body and movement. Maybe you do have the talent for swordsmanship, anywho, let’s go fight the dragon. ",
        image: "slimeInQuestion.png",
        choices: [
        {
          choice: "Refuse",
          destination: "Refuse",
        },
        {
          choice: "Fight Dragon",
          destination: "Fightdragon",
        },
      ],
    },
    Refuse: {
      title: "refuse",
      story: "Too bad(forced to fight the dragon anyways).",
      image: "cave.jpg",
      defaultDestination: "Killslime",
      buttonText: "Fighting sucks ",
    },
    Fightdragon: {
      title: "Fighting the dragon'",
      story:
        "You are directed by the ATM to the dragon's cave and proceed further into the cave. You peek around the corner where a dim light sits and you see a dragon at the end of it surrounded by priceless gems and minerals. The dragon is sleeping, so this is the perfect chance to attack. You quietly sneak up close to the dragon, and strike its eyes, the dragon awakes and spins around hitting you with its tail. You’re injured but quickly get to your feet and strike the dragon’s legs, reducing its mobility. Then it falls forward to the ground and you take one final swing to the neck of the dragon. It’s dead. That dragon took down 3 empires to get its fortune, or at least as much as you can carry. Ok, time to go back to the king.",
        image: "cave.jpg",
        choices: [
        {
          choice: "Go back to the king",
          destination: "King",
        },
        {
          choice: "Remorse the dragon",
          destination: "remorseDragon",
        },
      ],
    },
    remorseDragon: {
      title: "Be kind to the dragon",
      story:
        "You’re actually going to remorse it? How heroic…. You bury the dragon and remorse over it.",
        image:"RIPDragon.jpg",
        defaultDestination: "Fightdragon",
      choices: [
        {
          choice: "Secretending",
          destination: "Secretending"
        }
      ]
    },
    wrongWay: {
      title: "Leaving the Trail.",
      story:
        "Wait, where are you going? You haven’t even been in this game for that long and you’re already going where you want? I might be a voice in your head but you should still listen to me! Wait, is that a cave? Don’t go in there!",
      buttonText: "Where are you going?",
      image:"slimeForest.jpg",
      choices: [
        {
          choice: "Go in the cave",
          destination: "badChoice",
        },
      ],
    },
    badChoice: {
      title: "Scary Cave",
      story:
        "The moment you step into the cave you hear a low growl. This is your last warning.",
        image: "cave.jpg",
        choices: [
        {
          choice: " Proceed Further",
          destination: "keepGoing",
        },
      ],
    },
    keepGoing: {
      title: "Keep on walking.",
      story:
        "You follow the cave’s walls deeper into the darkness, and then you see a dim light at the end. You peek around the corner to find a dragon wide awake with gold, diamonds, rubies, and sapphires surrounding it. It sports you, but it’s too late to run back now, the dragon is fast and blows fire in the cave. You are burnt to ashes.",
        image: "insideCave.jpg",
        choices: [
        {
          choice: "Ending",
          destination: "Ending",
        },
      ],
    },
    Ending: {
      title: "Ending",
      story: "Died by not listening to the ATM",
      image: "insideCave.jpg",
      defaultDestination: "loser",
    },
    King: {
      title: "Coming back from defeating the dragon.",
      story:
        "King, “ welcome back Kazuki! I heard tales of your adventure of slimes and dragons! I can’t believe you actually went from slimes to dragons! I think you’re ready to go to war. Go and join today’s troops at the front lines!”",
      image:"longHall.jpg",
        choices: [
        {
          choice: "Go back to troops",
          destination: "troops",
        },
      ],
    },
    troops: {
      title: "Heading back to the troops",
      story:
        "You meet the troops, and there’s only like 4 people there, counting you… The group introduces themselves. The only girl on the team goes first, “ Hi, I am Eliza. The warrior, I specialize in dealing damage.” Handsome long haired night goes next, “ I am Caelus Mal Victor Heinz. The crown prince of this kingdom, I am a healer, it’s nice to meet you Kazuki.” Finally a skinny guy says, “I am Bruno, the mage.” Wow what a group of people… A warrior, a healer, a mage, and the hero. It doesn’t seem that you actually have anything to say, they already know who you are.",
      image:'training.jpg',
        choices: [
        {
          choice: "Spar with Caelus",
          destination: "Sparring",
        },
      ],
    },
    Sparring: {
      title: "SPAR!!!",
      story:
        "Even though he’s a healer, he’s quick on his feet, and dashes forward. He’s taking the offense.",
      image:'training.jpg',
        choices: [
        {
          choice: "Block",
          destination: "Block",
        },
        {
          choice: "Attack",
          destination: "Attack",
        },
      ],
    },
    Block: {
      title: "Block it come on.",
      story:
        "You strike to block his slashes and kick his leg. He lost his balance and you were able to apprehend him. Caelus says, “ you didn’t strike me, Why?” It sounds like more of an order tan a question…You’re the Crown Prince….? He’s disappointed but understands…",
        image:'training.jpg',
        defaultDestination: "Sparring",
    },
    Attack: {
      title: "You got this, Attack",
      story:
        "You strike his hand which makes him drop his sword. You won in a single slash with the blade of your sword pointed at his neck. Callus smiles and says, “You won… I have always been weak…” He looks like a sad puppy. Why? Because I say so. Of course you’re not weak, you’re the crown prince.",
        image:'training.jpg',
        choices: [
        {
          choice: "Yes you are weak",
          destination: "weak",
        },
      ],
    },
    weak: {
      title: "Gotta be honest",
      story:
        "Caelus laughs, “You really don’t emphasize with me? Aren’t you scared of my apolitical power?” It’s true, he will be the king one day… Should I care? I mean i’ll be gone when you become king. Caelus is shocked, “I mean, I guess so, but what’s stopping me from killing you now?” He seems upset. Can you? He’s silent and looks at the ground. Sorry I- Caelus laughs, “No one’s ever treated me like an actual person… Not even my own father, I always wanted to be the person he wanted me to be, but you somehow make me feel human. You remind me of my mother..” I don’t know much about the queen, all I know is that she was pretty. Your mother? Caelus, “ she was kind, warm, stubborn, and strong. Everything I wasn’t. She fought with a sword, until the demon king took  her very last breath…” and now the mood is depressing… I’m sorry, I didn’t know the queen was so.. Brave and strong. Caelus, “She was, she really was…” He’s smiling now… You feel a stronger bond with the Crown Prince. It’*s probably time to go to the front lines.",
        image:'training.jpg',
        choices: [
        {
          choice: "Go to front lines",
          destination: "Goingtofrontlines",
        },
      ],
    },
    Goingtofrontlines: {
      title: "Back here again.",
      story:
        "What a mess… everyone seems so tired, emotionless. This war is slowly eating them alive and they know it. Get a night’s rest, and wait for the plan. Wait, never mind, you’re gonna be thrown out into the battlefield. Good Luck!!",
        image: "camp.jpg",
        choices: [
        {
          choice: "Walking out into battle",
          destination: "Walkingintobattle",
        },
      ],
    },
    Walkingintobattle: {
      title: "Walking",
      story:
        "In the midst of the fog, lies a demon, the strongest one of them all. The King of Demons. He doesn’t waste any time, and lunges at you with all of his might.",
        image: "darkFoggyBattle.jpg",
        choices: [
        {
          choice: "Block",
          destination: "block",
        },
        {
          choice: "Tackle",
          destination: "tackle",
        },
      ],
    },
    block: {
      title: "Atleast you're trying",
      story: "He broke through your sword, and killed you.",
      image: "darkFoggyBattle.jpg",
      defaultDestination: "Walkingintobattle",
    },
    tackle: {
      title: "Gotta fight him sometime",
      story:
        "What are you thinking? Fine. You tackle him, wait what? The demon king seems to be startled, and you actually manage to kill him in one slice. You won, so you head to the king, and tell him about your success. He rewards you with a gate way home, but wait, do you really want to go home?",
        image: "darkFoggyBattle.jpg",
        choices: [
        {
          choice: "Go Home",
          destination: "Hometime"
        },
        {
          choice: "Stay",
          destination: "Stay"
        }
      ],
    },
    Stay: {
      title: "You decided to stay.",
      story: "You decided to stay with your friends, and you live a long life as a noble hero.",
      image: "castle.jpg",
    },
    Hometime: {
      title: "Time to go home.",
      story: "You  go home with the memories of your adventure. You're in your bed. Should you tell everyone about the other world, or keep it to yourself?",
      image: "bedroom.jpg",
      choices: [
        {
          choice: "Keep it to yourself",
          destination: "Keepittoyou"
        },
        {
          choice: "Tell everyone",
          destination: "Telleveryone"
        }
      ]
    },
    Telleveryone: {
      title: "Your going to tell everyone.",
      story: "You tell everyone and everyone thinks you're crazy, so you get sent to a pshychiatric ward.",
      image: "hospital.jpg",
    },
    Keepittoyou: {
      title: " Keep it to yourself",
      story: "You decide to keep it to yourself, and write a book. You're now a best selling author, and live a lonely life.",
      image: "book.jpg",
    },
    Secretending: {
      title: "Secret Ending",
      story: "This is only attainable if you remorsed the dragon.",
      image: "forest.jpg",
      choices: [
        {
          choice: "Go Patrol the forest.",
          destination: "Patrol",
        },
      ],
    },
    Patrol: {
      title: "Going to patrol the forest.",
      story:
        "You're first tasked with scouting the forest, and making sure that not even a mouse could bypass the defenses. While doing so, you meet someone in the fog, he’s tall and has horns. A demon so far into the enemy's border?",
        image: "forest.jpg",
        choices: [
        {
          choice: "Don't attack him.",
          destination: "Noattacking",
        },
      ],
    },
    Noattacking: {
      title: "Don't attack the Demon.",
      story:
        "Wait, he’s not hostile? He stared at you blatantly. It’s not a glare, but more of a curious stare. You guys stare at each other for another moment.",
        image: "forest.jpg",
        choices: [
        {
          choice: "Are you lost?",
          destination: "youLost",
        },
        {
          choice: "Who are you?",
          destination: "whoareYou",
        },
        {
          choice: "Stay Silent",
          destination: "Silence"
        }
      ],
    },
    youLost: {
      title: "Are you lost?",
      image: "forest.jpg",
      story:
        "Demon: “No.” What a short answer!! What am I supposed to say now?? And what’s with that monotone voice!!",
        defaultDestination: "whoareYou"
    },
    whoareYou: {
      title: "Who are you?",
      image: "forest.jpg",
      story:
        "Demon: “I'm Azarel. The Demon King.” Wait, what?! THE DEMON KING?! Oh dear… This ain’t good. Can you even fight someone like that? Or should we avoid a fight?? I'm Kazuki. Azarel: “I know.” HE KNEW? But he’s not attacking me? Maybe he’s being careful.. No, he knows he’s stronger than me, has more experience than me. Maybe I'm not even a threat to him… Well I knew that you were the demon king as well!  Azarel: “Of course you did.” There’s definitely sarcasm in his voice!! What should I say?! If you knew why, why aren’t you attacking me? Azarel: “Should I?” I swear… WHAT’S WITH THESE SHORT RESPONSES?! TALK MAN. Explain. Azarel sighs, “Why didn’t you attack me.” Good question, wait, that’s my question!!... Why didn’t I attack him?! You didn’t seem hostile. Azarel: “But I’m a demon.”... He makes a good point. Should I have attacked you? Azarel: “...You should have, but you didn’t. Am I not a threat to you? Do you think I’m not even worth fighting?” Wait, there’s some insecurity in his voice!! I didn’t mean to?! Now I feel bad..! It’s not like we don’t know that you’re the stronger one here. I’m sorry..! I didn’t mean to say anything to offend you, I was just trying to make conversation!",
      choices: [
        {
          choice: "Caelus appears",
          destination: "Caelus"
        }
      ],
    },
    Caelus: {
      story: "Just then… a twig snapped hat caught both of our attention. The crown prince. And he does NOT seem happy. Actually, He’s charging at Azarel?! Caelus, wait!! He’s not hostile! You can’t even win?! Caelus ignores you, and tackles the demon king, Azarel took the hit even though he could’ve ended him then and there. “Kazuki would’ve been sad if you were dead.” Wait, he didn’t kill Caelus because of me? Thank you. I don’t know what I would’ve done if he died. Azarel, “Of course.” Caelus, “HE WAS THE ONE WHO KILLED HER. KAZUKI PLEASE END HIM!!",
      image: "forest.jpg",
      choices: [
        {
          choice: "Kill the Demon King",
          destination: "Killinghim"
        },
        {
          choice: "Do nothing.",
          destination: "Donothing"
        }
      ]
    },
    Killinghim: {
      title: "Kill the Demon King",
      Story: "Let's head beck to the main storyline then..",
      image: "forest.jpg",
      buttonText: "Let's head on back ya'll.",
      choices: [
        {
          choice: "The demon king fights back",
          destination: "Heattacks",
        }
      ]
    },
    Heattacks: {
      title: "The Demon King fights back",
      story: "The demon king doesn't waste another breath blocking your attack, and he suddenly attacks as well...",
      image: "forest.jpg",
      defaultDestination: "tackle"
    },
    Donothing: {
      title: "Didn't kill the Demon King",
      story: "The demon king is silent and takes a punch to the face. Caelus looks like he’s having a breakdown… You drag Caelus off and explain to him, from the beginning. It’s ok… it’s alright.. Caelus is in silence while Azarel watches you comfort him. Azarel, “Can I get a hug too?” “No.” Caelus quickly says. He still seems a bit tense. Caelus… Your mother knew what she was going into when she joined the war.. Azarel, “Briar Lucidous Fraeya. The valkyrie.” Caelus looks up at Azarel in the eyes. “She was strong. Killed many of my men. Impenetrable leadership, bravery, and strategy.” Wow, she sounds amazing.. Like a true  hero. Caelus, “She was also a traveler like Kazuk.” WAIT WHAT. I KNEW THAT THERE ARE OTHER TRAVELERS, BUT CAELUS’S MOM WAS ONE OF THEM? SHE WAS?? Caelus says, “She was, She oppressed the demons to protect me.” Azarel, “I still can’t believe she gave birth to someone like you.”",
      image: "forest.jpg",
      choices: [
        {
          choice: "Smack Azarel to shut him up",
          destination: "smackAzarel"
        },
        {
          choice: "Change the topic",
          destination: "changeTopic"
        }
      ]
    },
    smackAzarel: {
      title: "Had to smack hims sometime",
      image: "forest.jpg",
      story: "Caelus laughs and finally gets his composure straight, “I hate you, but less.” Azarel scoffs, “I’m above such feelings.” Caelus is annoyed while Azarel smirks. Are you guys good now or..?? Azarel, “We're good.” Caelus, “for now.”"
    },
    changeTopic: {
      title: "Distract them",
      image: "forest.jpg",
      story: "“It’s getting late, I think we stayed here for too long, plus I’m supposed to be on patrol.” Caelus follows you and sticks out a tongue at Azarel. These children…",
      choices: [
        {
          choice: "Head back to camp",
          destination: "backtoCamp"
        }
      ]
    },
    backtoCamp: {
      title: "Go back to camp.",
      image: "forest.jpg",
      story: "Azarel, 'Wait.' You halt. Caelus doesn't look back, rather, he's quite annoyed. 'I want to stop fighting. War takes a lot out of you when you're at it for generations..' Caelus, 'I can't do that myself, aa much political power as I have, nothing will sway my father.'",
      choices: [
        {
        choice: "We'll figure something out",
        destination: "Figuresomething"
        }
      ]
    },
    Figuresomething: {
      title: "Figure out something.",
      image:"camp.jpg",
      story: "Caelus and you go back to the camp, and tell them to retreat. Azarel does the same and the border is fixed as it was before the war...Caelus talks to his father and threatened him to stand down as king, he then becomes king with no casualties, haha, who am I kidding, Caelus kills the king. A meeting is held and you meet the demon king once again, and they talk it out to an agreement. Apparently, Caelus killed your only way out of the world, the kingdidn't use a ritual to summon you, but his own power. So, you're stuck with being the median to the Demon King and Human King as a war hero, the Duke of Leviathan. ENDINGGG!!!!!!",
    },
    Silence: {
      title: "Shhhh",
      story: "Demon, “Human, what do you want.”",
      image: "forest.jpg",
      choices: [
        {
          choice: "You're the one in Human territory",
          destination: "questioning"
        },
        {
          choice: "I'm patrolling",
          destination: "Patrollingyes"
        }
      ]
    },
    questioning: {
      title: "Demon King likes to talk",
      image: "forest.jpg",
      story: "Demon: “And what are you doing so far from the base?”",
      defaultDestination: "Silence"
    },
    Patrollingyes: {
      title: "I'm Patrolling?",
      image: "forest.jpg",
      story: " Demon: “is that so. Someone of your status?” What did he mean by that? Does he know who I am? Could he be…??",
      choices: [
        {
          choice: "I know who you are.",
          destination: "knowingly"
        },
        {
          choice: "How do you know me..?",
          destination: "howyouKnow"
        }
      ]
    },
    howyouKnow: {
      title: "How do you know?",
      image: "forest.jpg",
      story: "Demon: 'Let me give you a hint. I am your fated enemy.' I know who he is",
      defaultDestination: "knowingly"
    },
    knowingly: {
      title: "I Know who you are.",
      image: "forest.jpg",
      story: "“The Demon King. You are the Demon King. You are my fated enemy.” Demon: “Kazuki, Am I not a worthy opponent.” There’s a hint of hospitality in his voice, but I somehow know he won’t attack me…",
      choices: [
        {
          choice: "He laughs and tells you his name",
          destination: "Laughing"
        },
      ]
    }, 
    Laughing: {
      image: "forest.jpg",
      story: "He chuckles. HE LAUGHED? WHAT WAS SO FUNNY?! I'm over here trying to play my cards right, when he's laughing! The audacity1 Demon: 'Azarel. My name is Azarel'.",
      defaultDestination: "Caelus"
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector("#start-button");
  var content = document.querySelector("#content");
  button.addEventListener("click", function () {
    var name = document.querySelector("#name-input");
    story = getStory(name.value);
    renderScene();
  });
});

function renderScene() {
  var text = "Next";
  var image = "";
  if (story[story.currentScene].image) {
    let element = document.querySelector("#imageContainer");
    element.innerHTML='';
    let image = document.createElement('img');
    image.src = `pictures/${story[story.currentScene].image}`;
    element.appendChild(image);
  } else {
    document.querySelector("#imageContainer").innerHTML = '';
  }
  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText;
  }
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${image}
  ${getInputs()}
  <button id = "submit-button">${text}</button>
  `;
  // if (story[story.currentScene].image) {
  //   document.querySelector("img").src = `./img/${story[story.currentScene].image}`
  // }
  var button = document.querySelector("#submit-button");
  button.addEventListener("click", function () {
    getInputValue();
  });
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute("data-destination");
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination;
  renderScene();
}

function getInputs() {
  var input = "";
  if (!story[story.currentScene].choices) {
    return "";
  }
  for (var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
    <div>
      <input data-destination = ${
        story[story.currentScene].choices[i].destination
      } id = "radio${i}" type = "radio" name = "choices" />
      <label for "radio${i}">${
      story[story.currentScene].choices[i].choice
    }</label>
    </div>`;
  }
  return input;
}
