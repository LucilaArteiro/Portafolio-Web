/* =========================================
   LUCILA ARTEIRO — PORTAFOLIO PROFESIONAL
   app.js
========================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* =======================================
     1. ELEMENTOS GENERALES
  ======================================= */

  const header = document.querySelector('.header')
  const menuToggle = document.querySelector('.menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  const themeToggle = document.querySelector('.theme-toggle')

  /* =======================================
     2. MENÚ RESPONSIVE
  ======================================= */

  function closeMenu () {
    if (!navLinks || !menuToggle) return

    navLinks.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Abrir menú')
    menuToggle.textContent = '☰'
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open')

      menuToggle.setAttribute('aria-expanded', String(isOpen))

      menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Cerrar menú' : 'Abrir menú'
      )

      menuToggle.textContent = isOpen ? '✕' : '☰'
    })

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu)
    })

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    })

    document.addEventListener('click', event => {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu()
      }
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        closeMenu()
      }
    })
  }

  /* =======================================
     3. ENCABEZADO AL HACER SCROLL
  ======================================= */

  function updateHeader () {
    if (!header) return

    header.classList.toggle('scrolled', window.scrollY > 30)
  }

  window.addEventListener('scroll', updateHeader, {
    passive: true
  })

  updateHeader()

  /* =======================================
     4. MODO OSCURO Y CLARO
  ======================================= */

  function getSavedTheme () {
    try {
      return localStorage.getItem('lucila-theme')
    } catch {
      return null
    }
  }

  function saveTheme (theme) {
    try {
      localStorage.setItem('lucila-theme', theme)
    } catch {
      // El sitio sigue funcionando sin almacenamiento.
    }
  }

  function applyTheme (theme) {
    const isLight = theme === 'light'

    document.body.classList.toggle('light-theme', isLight)

    if (themeToggle) {
      themeToggle.textContent = isLight ? '☀' : '☾'

      themeToggle.setAttribute(
        'aria-label',
        isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'
      )

      themeToggle.setAttribute('title', isLight ? 'Modo oscuro' : 'Modo claro')
    }
  }

  const savedTheme = getSavedTheme()

  applyTheme(savedTheme === 'light' ? 'light' : 'dark')

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme')

      const nextTheme = isLight ? 'dark' : 'light'

      applyTheme(nextTheme)
      saveTheme(nextTheme)
    })
  }

  /* =======================================
     5. AÑO AUTOMÁTICO DEL FOOTER
  ======================================= */

  const yearElement = document.querySelector('#year')

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  /* =======================================
     6. ANIMACIONES AL HACER SCROLL
  ======================================= */

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  const revealElements = document.querySelectorAll(
    '.section .eyebrow, ' +
      '.section h2, ' +
      '.section-intro, ' +
      '.about-grid .panel, ' +
      '.timeline-card, ' +
      '.project-feature, ' +
      '.project-card, ' +
      '.studio-mark, ' +
      '.contact-form, ' +
      '.contact-link'
  )

  function showAllReveals () {
    revealElements.forEach(element => {
      element.classList.add('visible')
    })
  }

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('visible')

          revealObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    revealElements.forEach(element => {
      element.classList.add('reveal')
      revealObserver.observe(element)
    })
  } else {
    showAllReveals()
  }

  /* =======================================
     7. EFECTO 3D EN LA FOTOGRAFÍA
  ======================================= */

  const portrait = document.querySelector('#portrait-tilt')

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

  if (portrait && finePointer.matches) {
    portrait.addEventListener('pointermove', event => {
      if (reduceMotion.matches) return

      const rect = portrait.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (event.clientX - centerX) / (rect.width / 2)
      const y = (event.clientY - centerY) / (rect.height / 2)

      const rotateY = x * 7
      const rotateX = -y * 7

      portrait.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    portrait.addEventListener('pointerleave', () => {
      portrait.style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
  }

  /* ========================================
   8. TECNOLOGÍAS CON LOGOS
======================================== */

  const technologies = {
    frontend: [
      {
        name: 'HTML5',
        icon: 'html5.svg',
        description: 'Estructura semántica y accesible de páginas web.'
      },
      {
        name: 'CSS3',
        icon: 'css.svg',
        description: 'Diseño responsive, estilos, transiciones y animaciones.'
      },
      {
        name: 'JavaScript',
        icon: 'javascript.svg',
        description: 'Interactividad y lógica de aplicaciones web.'
      },
      {
        name: 'TypeScript',
        icon: 'typescript.svg',
        description: 'JavaScript con tipado estático.'
      },
      {
        name: 'React',
        icon: 'react.svg',
        description:
          'Construcción de interfaces mediante componentes reutilizables.'
      },
      {
        name: 'Next.js',
        icon: 'nextdotjs.svg',
        description: 'Desarrollo de aplicaciones web basadas en React.'
      }
    ],

    herramientas: [
      {
        name: 'Git',
        icon: 'git.svg',
        description: 'Control de versiones y seguimiento de cambios.'
      },
      {
        name: 'GitHub',
        icon: 'github.svg',
        description: 'Organización y publicación de repositorios de código.'
      },
      {
        name: 'Netlify',
        icon: 'netlify.svg',
        description: 'Despliegue y alojamiento de proyectos web.'
      }
    ],

    servicios: [
      {
        name: 'Supabase',
        icon: 'supabase.svg',
        description: 'Base de datos y servicios backend para aplicaciones.'
      },
      {
        name: 'Firebase',
        icon: 'firebase.svg',
        description: 'Servicios para aplicaciones, incluyendo Firestore.'
      }
    ]
  }

  const techGrid = document.querySelector('#tech-grid')

  const techTabs = document.querySelectorAll('[data-tech-tab]')

  function renderTechnologies (category) {
    if (!techGrid) return

    const items = technologies[category] || []

    techGrid.replaceChildren()

    items.forEach(technology => {
      const card = document.createElement('button')

      card.type = 'button'
      card.className = 'tech-card'
      card.setAttribute('aria-expanded', 'false')

      // Contenedor del logo
      const iconContainer = document.createElement('span')
      iconContainer.className = 'tech-icon'

      // Imagen SVG
      const logo = document.createElement('img')

      logo.src = `./assets/Logos/${technology.icon}`
      logo.alt = ''
      logo.className = 'tech-logo'
      logo.loading = 'lazy'

      iconContainer.appendChild(logo)

      // Nombre
      const name = document.createElement('span')
      name.className = 'tech-name'
      name.textContent = technology.name

      // Descripción desplegable
      const description = document.createElement('span')
      description.className = 'tech-description'
      description.textContent = technology.description
      description.hidden = true

      card.append(iconContainer, name, description)

      card.addEventListener('click', () => {
        const wasExpanded = card.getAttribute('aria-expanded') === 'true'

        techGrid.querySelectorAll('.tech-card').forEach(otherCard => {
          otherCard.classList.remove('active')
          otherCard.setAttribute('aria-expanded', 'false')

          const otherDescription = otherCard.querySelector('.tech-description')

          if (otherDescription) {
            otherDescription.hidden = true
          }
        })

        if (!wasExpanded) {
          card.classList.add('active')
          card.setAttribute('aria-expanded', 'true')
          description.hidden = false
        }
      })

      techGrid.appendChild(card)
    })
  }

  // Categoría inicial
  if (techGrid) {
    renderTechnologies('frontend')
  }

  // Cambio de categoría
  techTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.techTab

      techTabs.forEach(otherTab => {
        const isActive = otherTab === tab

        otherTab.classList.toggle('active', isActive)

        otherTab.setAttribute('aria-selected', String(isActive))
      })

      renderTechnologies(category)
    })
  })

  /* =======================================
     9. FILTROS DE PROYECTOS
  ======================================= */

  const filterButtons = document.querySelectorAll('[data-filter]')

  const projectItems = document.querySelectorAll('[data-category]')

  const projectCardsContainer = document.querySelector('.project-cards')

  function filterProjects (category) {
    projectItems.forEach(project => {
      const projectCategory = project.dataset.category

      const shouldShow = category === 'todos' || projectCategory === category

      project.classList.toggle('is-hidden', !shouldShow)
    })

    if (projectCardsContainer) {
      const visibleCards = projectCardsContainer.querySelectorAll(
        '.project-card:not(.is-hidden)'
      )

      projectCardsContainer.classList.toggle(
        'is-hidden',
        visibleCards.length === 0
      )
    }
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(otherButton => {
        otherButton.classList.remove('active')
      })

      button.classList.add('active')

      filterProjects(button.dataset.filter)
    })
  })

  /* =======================================
     10. ENLACES ACTIVOS DEL MENÚ
  ======================================= */

  const sectionLinks = document.querySelectorAll('.nav-links a[href^="#"]')

  const sections = document.querySelectorAll('main section[id]')

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const sectionId = entry.target.id

          sectionLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${sectionId}`

            link.classList.toggle('active', isActive)
          })
        })
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0
      }
    )

    sections.forEach(section => {
      sectionObserver.observe(section)
    })
  }

  /* =======================================
     11. FORMULARIO DE CONTACTO
  ======================================= */

  const contactForm = document.querySelector('#contact-form')

  const formNote = document.querySelector('#form-note')

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault()

      if (!contactForm.reportValidity()) return

      const formData = new FormData(contactForm)

      const nombre = String(formData.get('nombre') || '').trim()

      const email = String(formData.get('email') || '').trim()

      const empresa = String(formData.get('empresa') || '').trim()

      const tipo = String(formData.get('tipo') || '').trim()

      const mensaje = String(formData.get('mensaje') || '').trim()

      const subject = `Contacto desde portafolio - ${tipo}`

      const body = [
        `Nombre: ${nombre}`,
        `Email: ${email}`,
        `Empresa: ${empresa || 'No indicada'}`,
        `Tipo de oportunidad: ${tipo}`,
        '',
        'Mensaje:',
        mensaje
      ].join('\n')

      const mailto =
        'mailto:lucilaarteiro2003@gmail.com' +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`

      window.location.href = mailto

      if (formNote) {
        formNote.textContent =
          'Se intentó abrir tu aplicación de correo. ' +
          'Revisá el mensaje y presioná Enviar ' +
          'para completar el contacto.'
      }
    })
  }

  /* =======================================
     12. DESPLAZAMIENTO SUAVE
  ======================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href')

      if (!targetId || targetId === '#') return

      const target = document.querySelector(targetId)

      if (!target) return

      event.preventDefault()

      target.scrollIntoView({
        behavior: reduceMotion.matches ? 'instant' : 'smooth',
        block: 'start'
      })

      if (history.replaceState) {
        history.replaceState(null, '', targetId)
      }
    })
  })

  /* =======================================
     13. ESTADO INICIAL
  ======================================= */

  console.log('Portafolio de Lucila Arteiro cargado correctamente.')
})
