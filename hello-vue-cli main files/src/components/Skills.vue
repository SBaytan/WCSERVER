<template>
<!--
  NAME: Baytan Shem Ardelee Pioleen M.
  SECTION: WD-201
  -->
    <div id="skills">
        <br>
        <div class="container" id="skills_con">
        <h1 class="title">{{ title }}</h1>
        <h3>{{ progLang }}</h3>
            <div class="type">Java</div>
            <div class="ratio" style="width: 60%;"></div>

            <div class="type">Python</div>
            <div class="ratio" style="width: 60%;"></div>

            <div class="type">HTML</div>
            <div class="ratio" style="width: 75%;"></div>

            <div class="type">CSS</div>
            <div class="ratio" style="width: 75%;"></div>

            <div class="type">Javascript</div>
            <div class="ratio" style="width: 20%;"></div> <br>

        <h3>{{ spokenLang }}</h3>
            <div class="type">English</div>
            <div class="ratio" style="width: 70%;"></div>

            <div class="type">Filipino</div>
            <div class="ratio" style="width: 80%;"></div> <br> <br>

        </div>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data() {
        return{
            title: 'Skills',
            progLang: 'Programming Languages',
            spokenLang: 'Spoken Languages'
        };
    }
}
</script>