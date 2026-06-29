<template>
  <div
    class="contacts-page"><br>

    <div class="contacts-card">
    
    <h3 class="card-title">
        Important Contacts
    </h3>

    <div class="contacts-grid">

        <!-- Iffah -->
        <div class="contact-card">
            <h4>Iffah</h4>
            <p>Project Director</p>
            <p>📞 83181773</p>
            <p>💬 <a href="https://t.me/niffahhh" target="_blank" rel="noopener noreferrer">@niffahhh</a></p>
        </div>

        <!-- Batrisyiya -->
        <div class="contact-card">
            <h4>Batrisyiya</h4>
            <p>Assistant Project Director (Programmes)</p>
            <p>📞 91129042</p>
            <p>💬 <a href="https://t.me/batrisyiya" target="_blank" rel="noopener noreferrer">@batrisyiya</a></p>
        </div>

        <!-- Danial -->
        <div class="contact-card">
            <h4>Danial</h4>
            <p>Assistant Project Director (Finance)</p>
            <p>Chief Safety Officer</p>
            <p>📞 90603619</p>
            <p>💬 <a href="https://t.me/dzanefy" target="_blank" rel="noopener noreferrer">@dzanefy</a></p>
        </div>

        <!-- Humairah -->
        <div class="contact-card">
            <h4>Humairah</h4>
            <p>Deputy Chief Safety Officer</p>
            <p>Female Residence IC</p>
            <p>📞 89467787</p>
            <p>💬 <a href="https://t.me/huma1rah" target="_blank" rel="noopener noreferrer">@huma1rah</a></p>
        </div>

        <!-- Syazmi -->
        <div class="contact-card">
            <h4>Syazmi</h4>
            <p>Male Residence IC</p>
            <p>Safety Officer</p>
            <p>📞 97357091</p>
            <p>💬 <a href="https://t.me/sbeveee" target="_blank" rel="noopener noreferrer">@sbeveee</a></p>
        </div>

    </div><br><br>

    <h3 class="card-title">
        Whistleblowing Channel
    </h3>

    <div class="contact-card whistleblow-card">
        <h4>Drop an email to:</h4>
        <p>📧 whistleblow@nus.edu.sg</p>
    </div>
  </div>
  </div>
</template>

<script>
    import pinkBackground from "../assets/images/pink-background.png";
</script>

<style scoped>

    .contacts-page {
        background-image: url("../assets/images/pink-background.png");

        background-size: cover;

        background-position: center;

        background-repeat: no-repeat;

        min-height: 100vh;

        overflow: hidden;

    }

    .contacts-card{
    
    max-width:900px;
    
    margin:140px auto 80px;

    background:white;

    padding:50px;

    border-radius:28px;

    box-shadow:0 15px 30px rgba(0,0,0,.08);

}

.contacts-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:20px;

}

.contact-card{

    background:#F8F2FF;

    border-radius:18px;

    padding:22px;

}

.contact-card h4{

    color:#402B6D;

    margin-bottom:10px;

}

.contact-card p{

    margin:6px 0;

    color:#555;

    line-height:1.5;

}

.whistleblow-card{

    max-width:450px;

}

.contacts-card{
        position:relative;
        z-index:1;
}

.card-title{

font-family:"Luckiest Guy";

color:#402B6D;

font-size:2.2rem;

margin-bottom:15px;

}

@media (max-width: 768px) {

.contacts-card {
  margin: 110px auto 60px;
  padding: 35px;
}

.contacts-grid {
  grid-template-columns: 1fr;
}

}

.contact-card a{
    color:#402B6D;
    font-weight:600;
    text-decoration:none;
    transition:.2s;
}

.contact-card a:hover{
    color:#6C4AB6;
    text-decoration:underline;
}

@media (max-width: 480px) {

.contacts-card {
  margin: 100px auto 50px;
  padding: 25px;
}

.card-title {
  font-size: 1.7rem;
}

.whistleblow-card {
  max-width: 100%;
}

}

</style>