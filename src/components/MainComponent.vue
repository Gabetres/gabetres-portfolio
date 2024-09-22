<template>
  <section class="profile-section">
    <div class="profile-content">
      <div class="profile-details">
        <p class="name">Olá, meu nome é Gabriel</p>
        <h1>
          <span>Backend</span> Developer
        </h1>
        <p class="description">
          Apaixonado por tecnologia, especializado em <span>criar soluções</span> robustas e escaláveis.
          Com uma forte compreensão de <span>arquitetura de software</span>, meu objetivo é otimizar
          o desempenho e garantir a segurança dos sistemas backend. Sempre buscando <span>aprender</span>
          e me atualizar com as últimas tendências do desenvolvimento.
        </p>
        <div class="contact-buttons">
          <a href="https://linkedin.com" class="btn linkedin">LinkedIn</a>
          <a href="https://github.com" class="btn github">
          </a>
          <a href="mailto:gabriel@example.com" class="btn contact">Entre em contato</a>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div>
        <img src="@/assets/images/profile-photo.png" alt="Gabriel" class="profile-photo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.profile-photo {
  width: 400px;
}

.profile-details {
  max-width: 600px;
}

p {
  font-size: 16px;
}

.name {
  font-weight: 600;
  font-size: 36px;
  color: #000;
}

h1 {
  font-weight: 700;
  color: #000;
  font-size: 54px;
  position: relative;
  bottom: 24px;
}

h1 span {
  color: #e01e37;
  font-weight: 700;
}

.description {
  padding-bottom: 60px;
  color: #232323;
  font-weight: 300;
}

.description span {
  font-weight: 500;
}

.contact-buttons .btn {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #e01e37;
  color: white;
  text-decoration: none;
  border-radius: 10px;
}

.contact-buttons a:hover {
  background-color: #6b202a;
  transform: scale(1.05);
}

.github {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45px;
  height: 45px;
}

img {
  width: 28px;
}
</style>
