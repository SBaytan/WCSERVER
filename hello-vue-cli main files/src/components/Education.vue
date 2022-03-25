<template>
<!--
  NAME: Baytan Shem Ardelee Pioleen M.
  SECTION: WD-201
  -->
    <div id="edu">
        <br>
        <div class="container" id="edu_con">
        <h1 class="title">{{ educ }}</h1>

        <h3>{{ elem }}</h3>
        <h4>2007-2014</h4>
        <p>Infant Jesus Academy, San Fernando, Pampanga</p> <br>

        <h3>{{ jhs }}</h3>
        <h4>2014-2018</h4>
        <p>Infant Jesus Academy, San Fernando, Pampanga</p> <br>

        <h3>{{ shs }}</h3>
        <h4>2018-2020</h4>
        <p>Colegio De Sebastian, San Fernando, Pampanga</p> <br>

        <h3>{{ college }}</h3>
        <h4>2020-Present</h4>
        <p>Holy Angel University, Angeles City, Pampanga</p> <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'edu',
    data() {
        return{
            educ: 'Education',
            elem: 'Elementary School',
            jhs: 'Junior High School',
            shs: 'Senior High School',
            college: 'College'
        };
    }
}
</script>