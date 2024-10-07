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
          experiência com tecnologias como <strong>Node, PHP, GoLang, Laravel, Git, Docker e ambientes Linux</strong>
          utilizando <strong>WSL</strong>. Estou
          sempre comprometido com as <strong>melhores práticas</strong> de desenvolvimento, oferecendo <strong>código de
            qualidade</strong>, otimização de
          processos e integração contínua.
        </p>
        <div class="contact-buttons">
          <div class="social-buttons">
            <a href="https://www.linkedin.com/in/gabrieltres/" target="_blank" class="btn"><img
                src="@/assets/images/linkedin-link.svg" alt="linkedin"></a>
            <a href="https://github.com/Gabetres" target="_blank" class="btn"><img src="@/assets/images/github-link.svg"
                alt="github"></a>
          </div>
          <a href="https://wa.me/5192256750" target="_blank" class="btn contact"><span>Entre em contato</span></a>
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

.contact-buttons {
  width: 100%;
  height: 1rem;
  display: flex;
  text-align: center;
  gap: 1rem;

  .social-buttons {
    display: flex;
    gap: 1rem;
  }

  .btn {
    transition: 250ms;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: #e01e38;

    img {
      width: 1.5rem;
    }
  }

  .btn:hover {
    transform: scale(1.15);
  }



  .contact {
    text-decoration: none;
    width: 250px;
    font-size: 1rem;
    font-weight: 600;
  }

  .contact:hover {
    transform: scale(1.05);
  }
}

.dark {
  .introduction {
    .name {
      color: #fff;
    }

    h1 {
      color: #fff;
    }
  }

  .description {
    color: #c4c4c4;
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

  .contact-buttons {
    height: 6rem;
    width: 30rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;

    .social-buttons {
      width: 100%;
    }

    .btn {
      width: 100%;
    }

    .btn:hover {
      transform: scale(1.05);
    }

    .contact {
      text-decoration: none;
      width: 100%;
      height: 100%;
      padding: 0.75rem 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .contact:hover {
      transform: scale(1.03);
    }

  }
}

@media (max-width: 640px) {
  .profile-section {
    padding: 2rem 2rem;
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

  .contact-buttons {
    margin-top: 1.5rem;
    width: 15rem;
  }



  .profile-photo {
    width: 13rem;
    margin-bottom: 1rem;
  }
}
</style>
