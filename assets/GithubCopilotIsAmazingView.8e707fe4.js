import{o as t,c as i,a as s}from"./index.762f793e.js";var a="/assets/copilot-account.f929f02f.png",n="/assets/copilot-schema.f499b088.png",e={};const l=s('<div class="markdown-body"><p><em>Published by <a href="https://github.com/zsakowitz">Zachary Sakowitz</a> on December 9, 2021.</em></p><p><a href="https://copilot.github.com/">GitHub Copilot</a> is an amazing tool that can autocomplete code snippets for you. In this article I share my experience using GitHub Copilot: the upsides, the downsides, and what I think it could become.</p><nav class="table-of-contents"><ul><li><a href="#what-is-github-copilot%3F">What is GitHub Copilot?</a></li><li><a href="#the-upsides-of-copilot">The Upsides of Copilot</a></li><li><a href="#the-downsides-of-copilot">The Downsides of Copilot</a></li><li><a href="#beginners%2C-avoid-copilot!">Beginners, Avoid Copilot!</a></li></ul></nav><h2 id="what-is-github-copilot%3F" tabindex="-1">What is GitHub Copilot?</h2><p>GitHub Copilot basically completes sections of code for you. There are other autocompleters, but they\u2019ll only complete a single variable or function name, whereas Copilot completes the entire line. Here\u2019s an example:</p><p><img src="'+a+'" alt="An example of Copilot in action"></p><p>The picture above shows me writing a <code class="">getPassword</code> function for the account system. Once I wrote the function signature, Copilot suggested a function body, which I got completely correct. You can also see the previously written <code class="">getUsername</code> function above, which Copilot probably based its suggestion on.</p><p>Let\u2019s look at another example.</p><p><img src="'+n+'" alt="Another example of Copilot"></p><p>In this picture it\u2019s completing some stuff from a custom schema system into a Fastify schema. Copilot completes the entire line of code and even recognizes that it needs to change the name of the schema from <code class="">reply</code> to <code class="">response</code>!</p><p>Copilot can also create functions from comments and generate lots of suggestions for a single prompt, but I\u2019ve never used these functions. I just use it for the autocompletion feature.</p><h2 id="the-upsides-of-copilot" tabindex="-1">The Upsides of Copilot</h2><p>Some of the things that I love about Copilot are that it\u2019s fast, it\u2019s context-aware, and it\u2019s easy to use. For example, if I want Copilot to complete something, I only have to wait a second or so before seeing a result. It also keeps track of context in a file and will suggest things based on my coding style. I also love how it just works. Some other tools require you to hit a keyboard shortcut or something else to trigger it, whereas Copilot starts itself.</p><h2 id="the-downsides-of-copilot" tabindex="-1">The Downsides of Copilot</h2><p>Sometimes Copilot suggests a piece of code when I\u2019m trying to use the standard autocomplete. This often happens when I\u2019m writing a new piece of code and Copilot gives a bad suggestion. When it happens I have to hit \u201CEscape\u201D, which is one extra keystroke. However, it\u2019s still a great tool overall and I\u2019d recommend it to anybody except people new to coding or who haven\u2019t grasped their language completely yet.</p><h2 id="beginners%2C-avoid-copilot!" tabindex="-1">Beginners, Avoid Copilot!</h2><p>While autocompletion tools are great for writing code and can save lots of time, I think that beginners should avoid them. This is because it can be too easy to avoid writing your own code, which can make you forget the basics of the language. This in turn leads to you moving backwards in the progress spectrum, which is never good.</p><hr><p>Overall, I think that Copilot is a great tool. I hope that it gets better and can help more, but I also believe that nobody should rely on it too much.</p><p><em>zSnout is not affiliated with GitHub or GitHub Copilot in any way. This article includes opinions from Zachary Sakowitz and does not reflect the opinions of zSnout as a whole.</em></p></div>',1),r=[l],c={},p={__name:"GithubCopilotIsAmazingView",setup(h,{expose:o}){return o({frontmatter:{}}),(d,u)=>(t(),i("article",{frontmatter:c},r))}};typeof e=="function"&&e(p);export{p as default,c as frontmatter};
