const nav=document.querySelector("nav");
const content=document.querySelector(".content");
const context = {
  about:`<section id="about" class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-4">About Me</h2>
        <p class="text-gray-600 leading-relaxed">
          Hello! I'm a passionate developer interested in building modern, scalable, and accessible web applications. I love experimenting with new technologies and solving real-world problems through code.
        </p>
      </div>
    </section>`,
  projects:`<section id="projects" class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 class="text-xl font-semibold mb-2">Project One</h3>
            <p class="text-gray-600 text-sm">
              A simple to-do app with drag and drop functionality built using React and Tailwind.
            </p>
          </div>
          <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 class="text-xl font-semibold mb-2">Project Two</h3>
            <p class="text-gray-600 text-sm">
              A personal finance tracker that helps users manage expenses and visualize spending habits.
            </p>
          </div>
        </div>
      </div>
    </section>`,
  contact:`<section id="contact" class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-semibold mb-6">Contact</h2>
        <p class="mb-6 text-gray-600">Want to connect? Fill out the form below or reach out via email.</p>
        <form class="space-y-4">
          <input type="text" placeholder="Your Name" class="w-full p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" class="w-full p-3 border border-gray-300 rounded" />
          <textarea placeholder="Your Message" rows="4" class="w-full p-3 border border-gray-300 rounded"></textarea>
          <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>`,
};

function putContent(text){
  content.innerHTML= text;
}

nav.childNodes.forEach(element => {
  element.addEventListener("click",()=>{
    putContent(context[element.className]);
  });
});
putContent(context['about']);