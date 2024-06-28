import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar Link e useNavigate do React Router
import robo_auxiliando from "../assets/robo-auxiliando-cliente-em-diagnostico-suporte-tecnico.png";
import robo_digita from "../assets/robo-digita-em-chat-bot-suporte-tecnico.png";
import suporte_tecnico from "../assets/suporte-tecnico-automatizado-facilita-diagnostico-de-conexao-de-internet-removebg-preview.png";

const HomePage = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
      setIsMenuOpen(true);
    };
  
    const handleCloseMenu = () => {
      setIsMenuOpen(false);
    };
  
    useEffect(() => {
      const navigation = document.getElementById('navigation');
  
      const handleScroll = () => {
        showNavOnScroll();
        showBackToTopButtonOnScroll();
        activateMenuAtCurrentSection('#home');
        activateMenuAtCurrentSection('#services');
        activateMenuAtCurrentSection('#about');
        activateMenuAtCurrentSection('#contact');
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const showNavOnScroll = () => {
      const navigation = document.getElementById('navigation');
      if (window.scrollY > 0) {
        navigation.classList.add('scroll');
      } else {
        navigation.classList.remove('scroll');
      }
    };
  
    const showBackToTopButtonOnScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (window.scrollY > 550) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };
  
    const activateMenuAtCurrentSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (!section) return;
  
      const targetLine = window.scrollY + window.innerHeight / 2;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionEndsAt = sectionTop + sectionHeight;
  
      const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop;
      const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  
      const sectionBoundaries =
        sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine;
  
      const menuElement = document.querySelector(`.menu a[to="${sectionId}"]`);
  
      if (menuElement) {
        menuElement.classList.remove('active');
        if (sectionBoundaries) {
          menuElement.classList.add('active');
        }
      }
    };
  
    const handleLogin = () => {
        navigate("/login"); // Navega para a página de login
    };

    const handleChat = () => {
        navigate("/chat"); // Navega para a página de login
    };

    const handleCadastroClick = () => {
        navigate("/cadastrar");
    };

  return (
    <>
    <nav id="navigation">
        <div className="wrapper">
            <svg width="133" height="18" viewBox="0 0 133 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="14" font-family="Arial, sans-serif" font-size="20" fill="black">Link</text>
                <text x="30" y="14" font-family="Arial, sans-serif" font-weight="bold"  font-size="20"  fill="green">Insight</text>
            </svg>

            <div className="menu">
                <ul>
                    <li><a className="active" onClick={closeMenu} to="#home">Início</a></li>
                    <li><a onclick={closeMenu} to="#services">Serviços</a></li>
                    <li><a onclick={closeMenu} to="#about">Sobre</a></li>
                </ul>

                <a className="button" onclick={handleCadastroClick} >Cadastre-se</a>

                <ul className="social-links">
                    <li>
                        <a target="_blank" to="http://instagram.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 6.49997H17.51" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" to="http://facebook.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 14.7348 5.99997 15 5.99997H18V1.99997Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                
                        </a>
                    </li>

                    <li>
                        <a target="_blank" to="http://youtube.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                    
                        </a>
                    </li>
                </ul>
            </div>

            <button
                aria-expanded="false"
                aria-label="Abrir menu"
                onclick={openMenu}
                className="open-menu">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20H30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 12H30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 28L30 28" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

            <button
                aria-expanded="true"
                aria-label="Fechar menu"
                onclick={closeMenu}
                className="close-menu">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10L10 30M10 10L30 30" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>

        </div>  
    </nav>
    <section id="home">
            <div className="wrapper">
                <div className="col-a">
                    <header>
                        <h4>BOAS-VINDAS A LINKINSIGHT 👋</h4>
                        <h1>Soluções inteligentes para telecomunicações</h1>
                    </header>

                    <div className="content">
                        <p>
                            Na LinkInsight, estamos comprometidos em resolver 
                            problemas de telecomunicações que afetam diretamente 
                            os clientes que dependem da internet no seu dia a dia, 
                            seja para lazer ou como ferramenta de trabalho.
                        </p>
                
                        <a className="btn-login" onClick={handleLogin}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8337 11.6667C13.667 11.5833 12.5837 11.0833 12.417 11C12.2503 10.9167 12.0837 10.9167 11.917 11.0833C11.7503 11.25 11.417 11.75 11.2503 11.9167C11.167 12.0833 11.0003 12.0833 10.8337 12C10.2503 11.75 9.66699 11.4167 9.16699 11C8.75033 10.5833 8.33366 10.0833 8.00033 9.58334C7.91699 9.41668 8.00033 9.25001 8.08366 9.16668C8.16699 9.08334 8.25033 8.91668 8.41699 8.83334C8.50033 8.75001 8.58366 8.58334 8.58366 8.50001C8.66699 8.41668 8.66699 8.25001 8.58366 8.16668C8.50033 8.08334 8.08366 7.08334 7.91699 6.66668C7.83366 6.08334 7.66699 6.08334 7.50033 6.08334C7.41699 6.08334 7.25033 6.08334 7.08366 6.08334C6.91699 6.08334 6.66699 6.25001 6.58366 6.33334C6.08366 6.83334 5.83366 7.41668 5.83366 8.08334C5.91699 8.83334 6.16699 9.58334 6.66699 10.25C7.58366 11.5833 8.75033 12.6667 10.167 13.3333C10.5837 13.5 10.917 13.6667 11.3337 13.75C11.7503 13.9167 12.167 13.9167 12.667 13.8333C13.2503 13.75 13.7503 13.3333 14.0837 12.8333C14.2503 12.5 14.2503 12.1667 14.167 11.8333C14.167 11.8333 14.0003 11.75 13.8337 11.6667ZM15.917 4.08334C12.667 0.833344 7.41699 0.833344 4.16699 4.08334C1.50033 6.75001 1.00033 10.8333 2.83366 14.0833L1.66699 18.3333L6.08366 17.1667C7.33366 17.8333 8.66699 18.1667 10.0003 18.1667C14.5837 18.1667 18.2503 14.5 18.2503 9.91668C18.3337 7.75001 17.417 5.66668 15.917 4.08334ZM13.667 15.75C12.5837 16.4167 11.3337 16.8333 10.0003 16.8333C8.75033 16.8333 7.58366 16.5 6.50033 15.9167L6.25033 15.75L3.66699 16.4167L4.33366 13.9167L4.16699 13.6667C2.16699 10.3333 3.16699 6.16668 6.41699 4.08334C9.66699 2.00001 13.8337 3.08334 15.8337 6.25001C17.8337 9.50001 16.917 13.75 13.667 15.75Z" fill="white"/>
                            </svg>
                            Login
                        </a>
                    </div> 
                 </div>

                <div className="col-b">
                    <img src={suporte_tecnico} className="image-col-b-3" alt="suporte tecnico automatizado facilita diagnostico de conexao de internet" />

                </div>

                <div className="stats">
                    <div className="stat">
                        <h3>+3.500</h3>
                        <p>Clientes atendidos</p>
                    </div>

                    <div className="stat">
                        <h3>+15</h3>
                        <p>Especialistas disponiveis</p>
                    </div>

                    <div className="stat">
                        <h3>+10</h3>
                        <p>Anos de Experiência</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="services" className="services">
            <div className="wrapper">
                <header>
                    <h4>Serviços</h4>
                    <h2>Como podemos ajudar a manter você sempre conectado?</h2>
                </header>

                <div className="cards">

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Notificação Automática</h3>
                        <p>Clientes recebem alertas automáticos sobre interrupções de serviço, informando as ações corretivas em andamento.</p>
                            
                    </div>

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Wi-Fi Não Aparece</h3>
                        <p>Saiba como resolver problemas onde sua rede Wi-Fi não aparece nos dispositivos.</p>
                    </div>

                    

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Velocidade Abaixo do Contratado</h3>
                        <p>Verifique se a velocidade da sua internet está de acordo com o contratado e saiba como proceder se não estiver.</p>
                    </div>

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Conectado Sem Internet</h3>
                        <p>Identifique e solucione problemas em que os dispositivos estão conectados ao Wi-Fi, mas sem acesso à internet.</p>
                    </div>

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Internet Caindo</h3>
                        <p>Receba orientações para solucionar quedas frequentes de conexão e manter a estabilidade da sua internet.</p>
                            
                    </div>

                    <div className="card">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#DCE9E2"/>
                            <path d="M17.091 8.18188L10.091 15.1819L6.90918 12.0001" stroke="#00856F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h3>Internet Lenta</h3>
                        <p>Diagnostique problemas de lentidão na sua conexão e receba dicas para melhorar a performance.</p>
                    </div>

                </div>
            </div>
        </section>

        <section id="about">
            <div className="wrapper">
                <div className="col-a">
                    <header>
                        <h4>SOBRE NÓS</h4>
                        <h2>Entenda quem somos e por que existimos</h2>
                    </header>
                

                    <div className="content">
                        <p>
                            O LinkInsight nasceu com a missão de simplificar 
                            e resolver problemas de conectividade para todos 
                            os usuários de internet. Nossa equipe está empenhada 
                            em fornecer soluções eficazes e acessíveis, garantindo 
                            que nossos clientes possam desfrutar de uma conexão estável 
                            e confiável em suas atividades diárias. Buscamos constantemente 
                            inovar e aprimorar nossos serviços, utilizando tecnologias avançadas 
                            e feedbacks dos usuários para oferecer a melhor experiência possível.
                        </p>
                    </div>
                </div>
                
                <div className="col-b">
                    <img src={robo_auxiliando} className="image-col-b" alt="robo auxiliando cliente em diagnostico suporte tecnico" />

                </div>
            </div>
        </section>

        <section id="contact">
            <div className="wrapper">
                <div className="col-a">
                    <header>
                        <h2>Entre em contato com a gente!</h2>
                    </header>

                    <div className="content">
                        <ul>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                R. Amauri Souza, 346</li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 6L12 13L2 6" stroke="#00856F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                contato@linkinsight.com
                            </li>

                        </ul>

                        <a className="button" onClick={handleChat}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z" fill="white"/>
                            </svg>
                                Iniciar chat
                        </a>     

                    </div>
                </div>

                <div className="col-b">
                    <img src={robo_digita} className="image-col-b-2" alt="robo digita em chat-bot suporte-tecnico" />
                </div>
            </div>
        </section>

        <footer>
            <div className="wrapper">

                <div className="col-a">
                    <a className="logo" to="#home">
                        <svg width="133" height="18" viewBox="0 0 133 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="14" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">LinkInsight</text>
                        </svg>
                    </a>

                    <p>
                        ©2024 - LinkInsight. <br />
                        Todos os direitos reservados.
                    </p>
                </div>

                <div className="col-b">
                    <ul className="social-links">
                        <li>
                            <a target="_blank" to="http://instagram.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17.5 6.49997H17.51" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" to="http://facebook.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 1.99997H15C13.6739 1.99997 12.4021 2.52675 11.4645 3.46444C10.5268 4.40212 10 5.67389 10 6.99997V9.99997H7V14H10V22H14V14H17L18 9.99997H14V6.99997C14 6.73475 14.1054 6.4804 14.2929 6.29286C14.4804 6.10533 14.7348 5.99997 15 5.99997H18V1.99997Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    
                            </a>
                        </li>

                        <li>
                            <a target="_blank" to="http://youtube.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#FFFAF1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>

        <a id="backToTopButton" to="#home">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#00856F"/>
                <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
        </a>
    </>
  );
};

export default HomePage ;
