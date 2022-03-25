<template>
<!--
  NAME: Baytan Shem Ardelee Pioleen M.
  SECTION: WD-201
  -->
    <div id="profile">
        <br>
        <div class="container" id="pro_con">
            <h1 class="title">{{ info }}</h1>

            <h4>{{ obj }}</h4>
                <p>A Web Development Student who wants to specialize in crafting interactive and user friendly webpages. Learn how to make feature rich websites, and create or improve web applications.</p> <br>

            <h4>{{ name }}</h4>
                <p>Baytan Shem Ardelee Pioleen M.</p> <br>

            <h4>{{ bday }}</h4>
                <p>November 05, 2001</p> <br>

            <h4>{{ course }}</h4>
                <p>Information Technology</p> <br>

            <h4>{{ specialization }}</h4>
                <p> Web Development</p> <br>

            <h4>{{ contact }}</h4>
                <p>Phone: 0905 444 1111</p>
                <p>Email: sbaytan@gmail.com</p>

        </div>
        
    </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return{
            info: 'Personal Information',
            obj: 'Objective',
            name: 'Name',
            bday: 'Birthdate',
            course: 'Course',
            specialization: 'Specialization',
            contact: 'Contact'
        };
    }
}
</script>