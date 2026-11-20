/* =========================================
   LUCILA ARTEIRO — LUCILA STUDIO
   studio.js

   Interacciones de la página Studio
========================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* =======================================
     1. CONFIGURACIÓN
  ======================================= */

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  const canAnimate = () => !reduceMotion.matches

  /* =======================================
     2. EFECTO 3D EN LA IDENTIDAD VISUAL
  ======================================= */

  const identityCard = document.querySelector('.studio-identity-card')

  const identityVisual = document.querySelector('.studio-hero-visual')

  if (identityCard && identityVisual) {
    identityVisual.addEventListener('pointermove', event => {
      if (!canAnimate()) return

      // Evitar inclinación en dispositivos táctiles
      if (event.pointerType === 'touch') return

      const rect = identityCard.getBoundingClientRect()

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (event.clientX - centerX) / (rect.width / 2)

      const y = (event.clientY - centerY) / (rect.height / 2)

      const rotationY = Math.max(-8, Math.min(8, x * 8))

      const rotationX = Math.max(-8, Math.min(8, -y * 8))

      identityCard.style.transform = `
          rotateX(${rotationX}deg)
          rotateY(${rotationY}deg)
        `
    })

    identityVisual.addEventListener('pointerleave', () => {
      identityCard.style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
  }

  /* =======================================
     3. ANIMACIONES AL HACER SCROLL
  ======================================= */

  const animatedElements = document.querySelectorAll(
    [
      '.studio-about-grid .panel',
      '.studio-service-card',
      '.studio-plan-card',
      '.studio-process-step',
      '.studio-featured-project',
      '.studio-tool',
      '.studio-contact-card'
    ].join(',')
  )

  if (canAnimate() && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('studio-visible')

          currentObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -25px 0px'
      }
    )

    animatedElements.forEach((element, index) => {
      element.classList.add('studio-reveal')

      // Retraso corto y repetitivo para no
      // acumular tiempos excesivos.
      const delay = (index % 3) * 90

      element.style.setProperty('--studio-delay', `${delay}ms`)

      observer.observe(element)
    })

    // Si el usuario activa movimiento reducido
    // durante la sesión, mostrar todo.
    reduceMotion.addEventListener('change', event => {
      if (!event.matches) return

      animatedElements.forEach(element => {
        element.classList.add('studio-visible')
      })

      if (identityCard) {
        identityCard.style.transform = ''
      }
    })
  }

  /* =======================================
     4. INDICADOR DE SECCIÓN ACTIVA
  ======================================= */

  const studioSections = document.querySelectorAll('main section[id]')

  const studioNavigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  )

  function updateActiveSection () {
    const scrollPosition = window.scrollY + 160

    let activeId = 'studio-inicio'

    studioSections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        activeId = section.id
      }
    })

    studioNavigationLinks.forEach(link => {
      const linkId = link.getAttribute('href')

      link.classList.toggle('studio-nav-active', linkId === `#${activeId}`)
    })
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true })

  updateActiveSection()

  /* =======================================
     5. EFECTO DE LUZ EN LOS PLANES
  ======================================= */

  const planCards = document.querySelectorAll('.studio-plan-card')

  planCards.forEach(card => {
    card.addEventListener('pointermove', event => {
      if (!canAnimate()) return
      if (event.pointerType === 'touch') return

      const rect = card.getBoundingClientRect()

      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      card.style.setProperty('--mouse-x', `${x}px`)

      card.style.setProperty('--mouse-y', `${y}px`)
    })
  })

  /* =======================================
   6 Y 7. CONSULTA POR PLAN
========================================= */

  const planButtons = document.querySelectorAll('.studio-plan-card .btn')

  const contactContent = document.querySelector('.studio-contact-content')

  const contactActions = document.querySelector('.studio-contact-actions')

  const emailLink = contactActions?.querySelector('a[href^="mailto:"]')

  let planMessage = null

  planButtons.forEach(button => {
    button.addEventListener('click', () => {
      const planName = button
        .closest('.studio-plan-card')
        ?.querySelector('h3')
        ?.textContent?.trim()

      if (!planName || !contactContent) return

      if (!planMessage) {
        planMessage = document.createElement('p')
        planMessage.className = 'studio-selected-plan'

        if (contactActions) {
          contactContent.insertBefore(planMessage, contactActions)
        }
      }

      planMessage.textContent = `Te interesa consultar por: ${planName}`

      if (emailLink) {
        const subject = encodeURIComponent(
          `Consulta por ${planName} - Lucila Studio`
        )

        const body = encodeURIComponent(
          `Hola, me gustaría consultar por el plan ${planName}.`
        )

        emailLink.href = `mailto:lucilaarteiro2003@gmail.com?subject=${subject}&body=${body}`
      }
    })
  })

  /* =======================================
     8. ENLACES INTERNOS
  ======================================= */

  const internalLinks = document.querySelectorAll('a[href^="#"]')

  internalLinks.forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href')

      if (!targetId || targetId === '#') return

      const target = document.querySelector(targetId)

      if (!target) return

      event.preventDefault()

      target.scrollIntoView({
        behavior: canAnimate() ? 'smooth' : 'auto',
        block: 'start'
      })

      history.replaceState(null, '', targetId)
    })
  })

  /* =======================================
     9. AÑO DEL FOOTER
  ======================================= */

  const year = document.getElementById('year')

  if (year) {
    year.textContent = new Date().getFullYear()
  }

  console.log('Lucila Studio cargado correctamente.')
})
