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
  padding: 0 2rem;
  position: relative;
  top: 5rem;
}

.profile-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-photo {
  width: 100%;
  width: 23rem;
  position: relative;
  right: 1rem;
}

.profile-details {
  max-width: 40rem;
  position: relative;
  top: 1rem;
  left: 1rem;
}

.introduction {
  position: relative;
  top: 7.5rem;

  .name {
    font-weight: 600;
    font-size: 1.5rem;
    color: #000;
  }

  h1 {
    font-weight: 700;
    color: #000000;
    font-size: 3.5rem;
    position: relative;
    bottom: 4.25rem;

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

  .profile-content {
    flex-direction: column-reverse;
  }

  .introduction {
    /* top: 7rem; */
    top: unset;
    bottom: 11rem;
    text-align: center;

    .name {
      font-size: 1.5rem;
      color: #000;
    }

    h1 {
      font-size: 2.3rem;
      bottom: 3.10rem;
    }
  }

  .description {
    text-align: center;
    font-size: 0.85rem;
    width: 50vw;
    position: relative;
    bottom: 10rem;
  }

  .profile-photo {
    width: 100%;
    width: 15rem;
    position: relative;
    right: unset;
    top: unset;
    bottom: 4.5rem;
  }
}
</style>
