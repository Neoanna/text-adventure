
var story;
function getStory(name) {
  return {
    currentScene: "attack",
    attack: {
      title: "Chapter 1",
      story: `You awake in an empty classroom, you are Kazuki Ryuusen. It’s the afternoon with the soft golden light reflecting off your desk and warm breeze. It’s peaceful. It’s always been peaceful. You realize that you’ve always gone with the flow, someone in the background, not someone to stand out. You are someone of no significance, would anyone even know if you just suddenly disappeared? Who would go looking for you? What impact have you made? ….. It’s late, go home, get some rest, you can think about it later..it’ll all be okay.${name}.`,
      choices: [
        {
          choice: "Leave",
          destination: 'classroom'
        },
      ]
    },
    classroom: {
      title: 'The epic battle for Cute Puppistan!',
      story: `You’re about to leave the classroom, the serenity of it all and the thoughts. As you reach for the doorknob, you lose grip and.. Teleport? It feels like falling…`,
      choices: [
        {
          choice: "Die while teleporting.",
          destination: 'Death'
        },
        {
          choice: "Proceed with teleportation.",
          destination: 'Proceed'
        }
      ]
    },
    Death: {
      title: "Back at home!",
      story: 'End: 50/50 percent chance. Sorry.',
      image: "video_game.png",
      defaultDestination: 'classroom',
      buttonText: "Let's try this again"
    },
    Proceed: {
      title: "something",
      story: "Wait, what's that over there? Three spirits? They look like an elf, a fairy, and a regular human? Look, they’re trying to merge with you, Kazuki, merging with them will guarantee a safe teleport. ",
      choices: [
        {
          choice: "Elf",
          destination: "Elf"
        },
        {
          choice: "Fairy",
          destination: "Fairy"
        },
        {
          choice: "Human",
          destination: "Human"
        }
      ]
    },
    Elf: {
      title: "First Choice",
      story: "You have longer ears, and you feel a surge of power.",
      defaultDestination: "ATM",
      buttonText: "Good Pick."
    },
    Fairy: {
      title: " Second Choice",
      story: "You have wings and.. Antennas…? You sense a greater feeling towards nature.",
      defaultDestination: "ATM",
      buttonText: "Wow, you shrunk bro."
    },
    Human: {
      title: "Third Choice",
      story: "You’re the same as you were, you just didn’t want to be a cool mythical creature but alright.",
      defaultDestination: "ATM",
      buttonText: "You're really boring."
    },
    ATM: {
      title: "ATM",
      story: "Something speaks to you in your head, oh wait, this is in your head, haha! Hello, I am a system, your Auto Technical Memory, or ATM for short, I will guide you on this adventure. You feel ground beneath you, it’s a soft red carpet. As your eyes trail this carpet along the marble floor you find a king at the end of it.. He seems powerful and cocky. Then he says, “Kazuki Ryuusen from across the universe, I am King Idgris, please follow my commands and train to fight in this way, I promise you great glory and a safe return home.” A chance to become someone useful? A chance to become a hero> No. An opportunity to save this world.",
      choices:[
        {
          choice:"No",
          destination: "No",
        },
        {
          choice: "Yes",
          destination: "Yes"
        }
      ]
    },
    No: {
      title: "Choice No",
      story: "The king was not pleased with your answer, he has no use for you so he signals his guard to kill you. As a sword pierces your heart, you die feeling the sharp pain of the blade.",
      defaultDestination: "Yes",
      buttonText: "Gotta start pver again. Sorry."
    },
    Yes: {
      title: "Correct Choice",
      story: "The king is pleased and tells one of his knights to guide you to the knights quarters. You finally got the opportunity to be someone, and you took it. The first thing you do when you’re at the quarters is get into gear and spar a rookie.",
      buttonText: "Why not.",
      choices: [
        {
          choice: "Strike First",
          story: "They blocked your attack and slashed at you! You’re injured! You are damaged and he has the upper hand, the moment he lunged toward you, you lost."
        },
        {
          choice: "Play Defensively",
          story: "They striked first but it was pretty weak, maybe they’re getting a feel of the battle? You then strike against his wooden sword and he blocks and hits you. You lost."
        }
      ]
    },

  }
}

document.addEventListener('DOMContentLoaded', function () {
  var button = document.querySelector('#start-button')
  var content = document.querySelector('#content')
  button.addEventListener('click', function () {
    var name = document.querySelector('#name-input')
    story = getStory(name.value)
    renderScene()
  })
})

function renderScene() {
  var text = "Next"
  var image = "";
  // if (story[story.currentScene].image) {
  //   image = "<img></img>"
  // }
  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${image}
  ${getInputs()}
  <button id = "submit-button">${text}</button>
  `
  // if (story[story.currentScene].image) {
  //   document.querySelector("img").src = `./img/${story[story.currentScene].image}`
  // }
  var button = document.querySelector("#submit-button");
  button.addEventListener('click', function () {
    getInputValue()
  })
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute('data-destination')
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination
  renderScene()
}

function getInputs() {
  var input = ""
  if (!story[story.currentScene].choices) {
    return ""
  }
  for (var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
    <div>
      <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
      <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
    </div>`
  }
  return input;
}