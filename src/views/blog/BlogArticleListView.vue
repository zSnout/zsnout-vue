<script lang="ts" setup>
  import DocumentDisplay from "@/components/DocumentDisplay.vue";
  import SearchBar, { type Link } from "@/components/SearchBar.vue";
  import Title from "@/components/Title.vue";

  let links: Link[] = [
    {
      name: "Mathemagical Tricks",
      desc: "Have you ever wanted to convince your friend that you have psychic powers? Learn how to use mathematical tricks to convince your friend that you can read their mind.",
      to: "/blog/mathemagical-tricks",
      keywords: "modulus modular arithmetic",
    },
    {
      name: "Github Copilot is Amazing",
      desc: "sakawi talks about his experience using the coding assistant GitHub Copilot. He shares some of the benefits of using GitHub Copilot as well as the downsides.",
      to: "/blog/github-copilot-is-amazing",
      keywords: "autocomplete assistants",
    },
    {
      name: "What Makes zSnout Different",
      desc: "Learn why zSnout is so different when compared to most other websites, including our unique theme system, offline capabilities, and more.",
      to: "/blog/what-makes-zsnout-different",
    },
    {
      name: "1 + 2 + 3 ... = -1/12",
      desc: "Did you know that the sum of all whole numbers is equal to -1/12? In this article we find out how it's possible and prove it ourselves by using nothing more than algebra.",
      to: "/blog/infinity-is-minus-one-twelfth",
      keywords: "infinity is equals minus one twelfth",
    },
    {
      name: "Divisibility Rules",
      desc: "Learn some quick divisibility rules and tricks for every number up to 12 to help you solve division problems faster, including a neat one for 7 that you haven't seen before.",
      to: "/blog/divisibility-rules",
      keywords: "divisions",
    },
    {
      name: "Calculating Weekdays",
      desc: "Learn how to calculate the day of the week for any date, whether it be 200 years ago at the beginning of the revolution or whether it be a scene from Back to the Future.",
      to: "/blog/calculating-weekdays",
      keywords: "dates",
    },
    {
      name: "Proving that 0 = 1",
      desc: "Learn how to prove that 0 = 1 by using simple algebra. Then, learn how to modify that equation using well-proven algebra to set any two numbers equal to each other.",
      to: "/blog/does-0-equal-1",
      keywords: "proofs zero one equals paradox",
    },
    {
      name: "Inside your Head",
      desc: "Did you know that using math we can force people to think of certain numbers? Learn how to force 9, 1089, or any other number you can think of using the simple tricks described here.",
      to: "/blog/forcing-1089",
      keywords: "9 1089 forcing numbers",
    },
  ];
</script>

<template>
  <DocumentDisplay>
    <Title>Blog Articles</Title>
    <SearchBar :links="links" autofocus />
  </DocumentDisplay>
</template>
