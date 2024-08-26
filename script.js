const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = "krishna.jpg";
  img.className = "img"; 
  wrapper.appendChild(img);

  const container = document.createElement("div");
  container.className = "container"; 

  question.innerHTML = "Yayyyyy!!!";
  // question.style.textDecoration = "underline"; // add underline
  question.style.fontSize = "36px"; // increase font size
  question.style.textAlign = "center"; 
  container.appendChild(question); 

  gif.src = "https://media.tenor.com/jgZBcWxzbyUAAAAi/cats-love.gif";
  gif.style.width = "100px"; // set small size for the gif
  gif.style.height = "100px";
  container.appendChild(gif); // add the gif to the container

  container.style.display = "flex";
  container.style.justifyContent = "flex-start";
  container.style.alignItems = "center";

  wrapper.appendChild(container); // add the container to the wrapper

  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "center";

  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});

noBtn.addEventListener("mouseover", () => {
  // Generate a random x and y coordinate within the viewport
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));

  // Set the No button's position to the random coordinates
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${y}px`;
  noBtn.style.left = `${x}px`;
});