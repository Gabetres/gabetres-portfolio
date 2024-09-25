<template>
  <section class="profile-section">
    <div class="profile-content">
      <div class="profile-details">
        <div class="introduction">
          <p class="name">Olá, meu nome é Gabriel</p>
          <h1>
            <span>Backend</span> Developer
          </h1>
        </div>
        <p class="description">
          Programador backend especializado em desenvolvimento de <strong>soluções eficientes e escaláveis</strong>.
          Tenho ampla
          experiência com tecnologias como <strong>Node.JS, PHP, GoLang, Laravel, Git, Docker e ambientes Linux</strong>
          utilizando <strong>WSL</strong>. Estou
          sempre comprometido com as <strong>melhores práticas</strong> de desenvolvimento, oferecendo <strong>código de
            qualidade</strong>, otimização de
          processos e integração contínua.
        </p>
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
  padding: 5rem 2rem;
  margin: auto;
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}

.profile-photo {
  width: 23rem;
}

.profile-details {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-top: 7rem;
  max-width: 40rem;
}

.introduction {
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-wrap: nowrap;
  height: 5rem;
  line-height: 37px;
  white-space: nowrap;

  .name {
    margin: 0;
    font-weight: 600;
    font-size: 1.5rem;
    color: #000;
  }

  h1 {
    margin: 0;
    font-weight: 700;
    color: #000000;
    font-size: 3.5rem;

    span {
      color: #e01e38;
      font-weight: 700;
    }
  }
}

.description {
  color: #232323;
  font-weight: 300;
  font-size: 1rem;

  strong {
    font-weight: 600;
  }
}

@media (max-width: 1023px) {
  .profile-section {
    padding: 2rem 5rem;
  }

  .profile-content {
    flex-direction: column-reverse;
    gap: 0;
  }

  .profile-details {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  .introduction {
    text-align: center;
    margin: 0 auto;
  }

  .description {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .profile-section{
    padding: 2 1rem;
    max-width: 30rem;
  }

  .introduction {
    height: 2.8rem;
    line-height: 1.5rem;
    h1 {
      font-size: 1.8rem;
    }

    .name {
      font-size: 1.2rem;
    }
  }

  .description {
    font-size: 0.75rem;
  }

  .profile-photo {
    width: 13rem;
  }
}
</style>
