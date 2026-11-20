/* =========================================
   LUCILA ARTEIRO — DETALLE DE PROYECTOS
   proyecto.js
========================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* =======================================
     1. INFORMACIÓN DE LOS PROYECTOS
  ======================================= */

  const projects = {
    virtuosa: {
      title: 'Virtuosa Inc',
      category: 'Proyecto profesional',
      subtitle: 'Tienda de indumentaria y panel administrativo',
      description:
        'Desarrollo de una tienda web de indumentaria con catálogo organizado por categorías, carrito conectado a WhatsApp y panel administrativo para gestionar productos.',

      about:
        'Virtuosa Inc es un proyecto de tienda online desarrollado para facilitar la presentación y administración de productos de indumentaria. La parte pública permite explorar el catálogo y preparar pedidos, mientras que el panel administrativo está pensado para que la dueña pueda realizar modificaciones sin tener que editar el código de la página.',

      type: 'Tienda web',
      status: 'Finalizado',
      role: 'Desarrolladora Web',

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Supabase',
        'Diseño responsive'
      ],

      // Reemplazá las rutas por tus capturas reales.
      // Si todavía no tenés imágenes, dejá el array vacío.
      images: [],

      cover: '',

      // Agregá los enlaces cuando los quieras publicar.
      website: '',
      github: '',

      features: [
        {
          icon: '▦',
          title: 'Catálogo de productos',
          description: 'Visualización de prendas organizadas por categorías.',
          details:
            'El catálogo permite presentar productos con sus imágenes e información correspondiente, facilitando la navegación por las diferentes secciones de la tienda.'
        },
        {
          icon: '🛒',
          title: 'Carrito de compras',
          description:
            'Selección de productos y envío del pedido por WhatsApp.',
          details:
            'Las personas pueden agregar productos al carrito y preparar su pedido. La compra no se paga dentro de la página: el contacto continúa mediante WhatsApp.'
        },
        {
          icon: '⚙',
          title: 'Panel administrativo',
          description: 'Gestión de productos desde una interfaz independiente.',
          details:
            'La dueña puede agregar, editar y eliminar productos, además de administrar información como precios, talles, colores, descripciones y fotografías.'
        },
        {
          icon: '📱',
          title: 'Diseño responsive',
          description: 'Adaptación a celulares, tablets y computadoras.',
          details:
            'La interfaz está diseñada para reorganizar su contenido según el tamaño de pantalla y permitir la navegación desde distintos dispositivos.'
        }
      ],

      challenges: [
        {
          title: 'Facilitar la administración del catálogo',
          problem:
            'La tienda necesita incorporar productos nuevos y modificar información de las prendas con frecuencia.',
          solution:
            'Desarrollé un panel administrativo con formularios y opciones para agregar, editar y eliminar productos.',
          result:
            'La administración del catálogo puede realizarse desde una interfaz preparada para la dueña, sin necesidad de modificar manualmente el código.'
        },
        {
          title: 'Simplificar el proceso de compra',
          problem:
            'El proyecto necesitaba permitir la selección de prendas sin incorporar pagos directamente en el sitio.',
          solution:
            'Implementé un carrito que permite reunir productos y continuar el pedido por WhatsApp.',
          result:
            'La persona puede preparar su selección desde el catálogo y continuar la conversación de compra con el negocio.'
        }
      ],

      roadmap: []
    },

    examenes: {
      title: 'Organizador de exámenes',
      category: 'Proyecto personal',
      subtitle: 'Aplicación para organizar evaluaciones y materias',

      description:
        'Proyecto personal orientado a organizar materias, evaluaciones y temas de estudio desde una aplicación web.',

      about:
        'El organizador de exámenes es una aplicación personal en desarrollo. Su objetivo es reunir información académica en un mismo lugar y facilitar la planificación de evaluaciones y contenidos de estudio.',

      type: 'Aplicación web',
      status: 'En desarrollo',
      role: 'Desarrolladora Web',

      technologies: ['HTML', 'CSS', 'JavaScript'],

      images: [],
      cover: '',
      website: '',
      github: '',

      features: [
        {
          icon: '📚',
          title: 'Organización de materias',
          description: 'Sección destinada a reunir las materias.',
          details:
            'Funcionalidad prevista para organizar la información de las distintas materias.'
        },
        {
          icon: '📅',
          title: 'Evaluaciones',
          description: 'Registro y organización de exámenes.',
          details:
            'Funcionalidad prevista para consultar evaluaciones y sus datos asociados.'
        },
        {
          icon: '☑',
          title: 'Temas de estudio',
          description: 'Organización de contenidos por materia.',
          details:
            'Funcionalidad prevista para llevar un registro de los temas que deben estudiarse.'
        }
      ],

      // No inventamos desafíos técnicos ni resultados.
      // Los agregaremos cuando revisemos el proyecto.
      challenges: [],

      // Etapas de referencia: confirmar estado real.
      roadmap: [
        {
          title: 'Definición de funcionalidades',
          status: 'pending',
          description:
            'Confirmar los requisitos y las funciones que tendrá la aplicación.'
        },
        {
          title: 'Desarrollo de la interfaz',
          status: 'pending',
          description:
            'Revisar las pantallas y su adaptación a diferentes dispositivos.'
        },
        {
          title: 'Pruebas y publicación',
          status: 'pending',
          description:
            'Comprobar el funcionamiento y preparar una versión publicable.'
        }
      ]
    },

    kiosco: {
      title: 'Panel administrativo para kiosco',
      category: 'Proyecto personal',
      subtitle: 'Herramienta de gestión para un comercio',

      description:
        'Proyecto de panel administrativo para un kiosco, enfocado en la gestión interna del negocio y no en la venta online.',

      about:
        'Este proyecto consiste en el desarrollo de una herramienta administrativa para un kiosco. A diferencia de una tienda de comercio electrónico, su objetivo es ofrecer funciones de gestión interna. Las características definitivas se incorporarán a medida que avance el desarrollo.',

      type: 'Panel administrativo',
      status: 'En desarrollo',
      role: 'Desarrolladora Web',

      technologies: ['HTML', 'CSS', 'JavaScript'],

      images: [],
      cover: '',
      website: '',
      github: '',

      features: [
        {
          icon: '⚙',
          title: 'Interfaz administrativa',
          description: 'Espacio destinado a la gestión del comercio.',
          details:
            'La estructura y las herramientas administrativas específicas se definirán según las necesidades del proyecto.'
        },
        {
          icon: '▤',
          title: 'Gestión interna',
          description: 'Herramientas para organizar tareas del negocio.',
          details:
            'Las funcionalidades concretas se incorporarán cuando estén desarrolladas y verificadas.'
        }
      ],

      challenges: [],

      roadmap: [
        {
          title: 'Definición de necesidades',
          status: 'pending',
          description:
            'Identificar las tareas administrativas que debe resolver el sistema.'
        },
        {
          title: 'Desarrollo del panel',
          status: 'pending',
          description: 'Construir las pantallas y funciones de administración.'
        },
        {
          title: 'Pruebas de funcionamiento',
          status: 'pending',
          description:
            'Verificar las funcionalidades antes de presentar el proyecto.'
        }
      ]
    }
  }

  /* =======================================
     2. IDENTIFICAR EL PROYECTO
  ======================================= */

  const params = new URLSearchParams(window.location.search)

  const projectId = params.get('id') || 'virtuosa'

  const project = projects[projectId]

  if (!project) {
    const main = document.querySelector('main')

    if (main) {
      main.innerHTML = `
        <section class="section" style="padding-top:160px">
          <div class="container">
            <div class="project-empty">
              <h2>Proyecto no encontrado</h2>
              <p>
                El proyecto solicitado no está disponible.
              </p>
              <a href="index.html#proyectos"
                 class="btn btn-primary">
                Volver a proyectos
              </a>
            </div>
          </div>
        </section>
      `
    }

    return
  }

  /* =======================================
     3. FUNCIONES AUXILIARES
  ======================================= */

  function getElement (id) {
    return document.getElementById(id)
  }

  function setText (id, value) {
    const element = getElement(id)

    if (element) {
      element.textContent = value || ''
    }
  }

  function createElement (tag, className, text) {
    const element = document.createElement(tag)

    if (className) {
      element.className = className
    }

    if (text !== undefined) {
      element.textContent = text
    }

    return element
  }

  function addParagraph (parent, text) {
    const paragraph = createElement('p', '', text)
    parent.appendChild(paragraph)
  }

  /* =======================================
     4. CARGAR INFORMACIÓN PRINCIPAL
  ======================================= */

  document.title = `${project.title} | Lucila Arteiro`

  setText('project-category', project.category)
  setText('project-title', project.title)
  setText('project-subtitle', project.subtitle)
  setText('project-description', project.description)

  setText('project-about', project.about)
  setText('project-type', project.type)
  setText('project-status', project.status)
  setText('project-role', project.role)

  /* =======================================
     5. TECNOLOGÍAS
  ======================================= */

  const technologiesContainer = getElement('project-technologies')

  if (technologiesContainer) {
    technologiesContainer.replaceChildren()

    project.technologies.forEach(technology => {
      const chip = createElement('span', '', technology)

      technologiesContainer.appendChild(chip)
    })
  }

  /* =======================================
     6. BOTONES DEL PROYECTO
  ======================================= */

  const actionsContainer = getElement('project-actions')

  function createAction (label, url, className) {
    if (!url || !actionsContainer) return

    const link = createElement('a', className, label)

    link.href = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'

    actionsContainer.appendChild(link)
  }

  createAction('Ver sitio web ↗', project.website, 'btn btn-primary')

  createAction('Ver código en GitHub ↗', project.github, 'btn btn-outline')

  /* =======================================
     7. IMAGEN DE PORTADA
  ======================================= */

  const coverContainer = getElement('project-cover')

  if (coverContainer && project.cover) {
    const image = document.createElement('img')

    image.src = project.cover
    image.alt = `Portada de ${project.title}`

    image.onerror = () => {
      image.remove()
    }

    coverContainer.replaceChildren(image)
  }

  /* =======================================
     8. GALERÍA DE IMÁGENES
  ======================================= */

  const galleryImages = project.images

  const mainImage = getElement('gallery-main-image')
  const placeholder = getElement('gallery-placeholder')

  const thumbnailsContainer = getElement('gallery-thumbnails')

  const galleryCounter = getElement('gallery-counter')

  const previousButton = getElement('gallery-prev')

  const nextButton = getElement('gallery-next')

  const expandButton = getElement('gallery-expand')

  let currentImageIndex = 0

  function updateGallery () {
    if (!mainImage || !placeholder) return

    if (galleryImages.length === 0) {
      mainImage.hidden = true
      placeholder.hidden = false

      if (galleryCounter) {
        galleryCounter.textContent = 'Todavía no hay capturas disponibles.'
      }

      if (previousButton) {
        previousButton.disabled = true
      }

      if (nextButton) {
        nextButton.disabled = true
      }

      if (expandButton) {
        expandButton.hidden = true
      }

      return
    }

    const currentImage = galleryImages[currentImageIndex]

    mainImage.src = currentImage.src

    mainImage.alt =
      currentImage.alt || `Captura ${currentImageIndex + 1} de ${project.title}`

    mainImage.hidden = false
    placeholder.hidden = true

    if (galleryCounter) {
      galleryCounter.textContent = `${currentImageIndex + 1} de ${
        galleryImages.length
      }`
    }

    if (previousButton) {
      previousButton.disabled = galleryImages.length < 2
    }

    if (nextButton) {
      nextButton.disabled = galleryImages.length < 2
    }

    if (expandButton) {
      expandButton.hidden = false
    }

    updateThumbnails()
  }

  function updateThumbnails () {
    if (!thumbnailsContainer) return

    thumbnailsContainer.replaceChildren()

    galleryImages.forEach((imageData, index) => {
      const button = createElement('button', 'gallery-thumbnail')

      button.type = 'button'

      button.setAttribute('aria-label', `Ver imagen ${index + 1}`)

      if (index === currentImageIndex) {
        button.classList.add('active')
      }

      const image = document.createElement('img')

      image.src = imageData.src
      image.alt = imageData.alt || ''

      button.appendChild(image)

      button.addEventListener('click', () => {
        currentImageIndex = index
        updateGallery()
      })

      thumbnailsContainer.appendChild(button)
    })
  }

  function nextImage () {
    if (galleryImages.length < 2) return

    currentImageIndex = (currentImageIndex + 1) % galleryImages.length

    updateGallery()
    updateLightboxImage()
  }

  function previousImage () {
    if (galleryImages.length < 2) return

    currentImageIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length

    updateGallery()
    updateLightboxImage()
  }

  previousButton?.addEventListener('click', previousImage)

  nextButton?.addEventListener('click', nextImage)

  updateGallery()

  /* =======================================
     9. AMPLIAR IMÁGENES
  ======================================= */

  const lightbox = getElement('gallery-lightbox')

  const lightboxImage = getElement('lightbox-image')

  const closeLightboxButton = getElement('lightbox-close')

  const lightboxPrevious = getElement('lightbox-prev')

  const lightboxNext = getElement('lightbox-next')

  let previousFocus = null

  function updateLightboxImage () {
    if (!lightboxImage || galleryImages.length === 0) {
      return
    }

    const imageData = galleryImages[currentImageIndex]

    lightboxImage.src = imageData.src

    lightboxImage.alt = imageData.alt || `Imagen ampliada de ${project.title}`
  }

  function openLightbox () {
    if (!lightbox || galleryImages.length === 0) {
      return
    }

    previousFocus = document.activeElement

    updateLightboxImage()

    lightbox.hidden = false

    lightbox.setAttribute('aria-hidden', 'false')

    document.body.classList.add('lightbox-open')

    closeLightboxButton?.focus()
  }

  function closeLightbox () {
    if (!lightbox || lightbox.hidden) return

    lightbox.hidden = true

    lightbox.setAttribute('aria-hidden', 'true')

    document.body.classList.remove('lightbox-open')

    previousFocus?.focus()
  }

  expandButton?.addEventListener('click', openLightbox)

  mainImage?.addEventListener('click', openLightbox)

  closeLightboxButton?.addEventListener('click', closeLightbox)

  lightboxPrevious?.addEventListener('click', previousImage)

  lightboxNext?.addEventListener('click', nextImage)

  lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', event => {
    if (!lightbox || lightbox.hidden) return

    if (event.key === 'Escape') {
      closeLightbox()
    }

    if (event.key === 'ArrowRight') {
      nextImage()
    }

    if (event.key === 'ArrowLeft') {
      previousImage()
    }

    if (event.key === 'Tab') {
      const focusable = Array.from(
        lightbox.querySelectorAll('button:not([disabled])')
      )

      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
  })

  /* =======================================
     10. DESLIZAMIENTO TÁCTIL
  ======================================= */

  const galleryArea = getElement('gallery-image-container')

  let touchStartX = 0

  galleryArea?.addEventListener(
    'touchstart',
    event => {
      touchStartX = event.changedTouches[0].screenX
    },
    { passive: true }
  )

  galleryArea?.addEventListener(
    'touchend',
    event => {
      const touchEndX = event.changedTouches[0].screenX

      const difference = touchEndX - touchStartX

      if (Math.abs(difference) < 50) return

      if (difference < 0) {
        nextImage()
      } else {
        previousImage()
      }
    },
    { passive: true }
  )

  /* =======================================
     11. FUNCIONALIDADES
  ======================================= */

  const featuresContainer = getElement('project-features')

  if (featuresContainer) {
    featuresContainer.replaceChildren()

    project.features.forEach(feature => {
      const card = createElement('article', 'panel project-feature-card')

      const icon = createElement('div', 'panel-icon', feature.icon)

      const title = createElement('h3', '', feature.title)

      const description = createElement('p', '', feature.description)

      const details = document.createElement('details')

      const summary = createElement('summary', '', 'Conocer más')

      details.appendChild(summary)

      addParagraph(details, feature.details)

      card.append(icon, title, description, details)

      featuresContainer.appendChild(card)
    })
  }

  /* =======================================
     12. DESAFÍOS Y SOLUCIONES
  ======================================= */

  const challengesContainer = getElement('project-challenges')

  function createChallengeStep (label, content) {
    const step = createElement('div', 'challenge-step')

    const heading = createElement('strong', '', label)

    const paragraph = createElement('p', '', content)

    step.append(heading, paragraph)

    return step
  }

  if (challengesContainer) {
    challengesContainer.replaceChildren()

    if (project.challenges.length === 0) {
      const message = createElement('div', 'project-empty')

      addParagraph(
        message,
        'Esta sección se completará cuando ' +
          'estén documentados los desafíos ' +
          'y resultados reales del proyecto.'
      )

      challengesContainer.appendChild(message)
    } else {
      project.challenges.forEach(challenge => {
        const card = createElement('article', 'panel project-challenge-card')

        const title = createElement('h3', '', challenge.title)

        const details = document.createElement('details')

        const summary = createElement(
          'summary',
          '',
          'Ver problema, solución y resultado'
        )

        details.appendChild(summary)

        details.appendChild(createChallengeStep('Problema', challenge.problem))

        details.appendChild(createChallengeStep('Solución', challenge.solution))

        details.appendChild(createChallengeStep('Resultado', challenge.result))

        card.append(title, details)

        challengesContainer.appendChild(card)
      })
    }
  }

  /* =======================================
     13. ROADMAP
  ======================================= */

  const roadmapSection = getElement('project-roadmap-section')

  const roadmapContainer = getElement('project-roadmap')

  const statusLabels = {
    completed: 'Completado',
    progress: 'En proceso',
    pending: 'Pendiente'
  }

  const statusSymbols = {
    completed: '✓',
    progress: '◌',
    pending: '○'
  }

  if (roadmapSection && roadmapContainer && project.roadmap.length > 0) {
    roadmapSection.hidden = false

    roadmapContainer.replaceChildren()

    project.roadmap.forEach(step => {
      const status = statusLabels[step.status] ? step.status : 'pending'

      const item = createElement('article', `roadmap-item ${status}`)

      const indicator = createElement(
        'div',
        'roadmap-indicator',
        statusSymbols[status]
      )

      const content = createElement('div', 'roadmap-content')

      const label = createElement(
        'span',
        'roadmap-status',
        statusLabels[status]
      )

      const title = createElement('h3', '', step.title)

      const description = createElement('p', '', step.description)

      content.append(label, title, description)

      item.append(indicator, content)

      roadmapContainer.appendChild(item)
    })
  }

  /* =======================================
     14. NAVEGACIÓN ENTRE PROYECTOS
  ======================================= */

  const projectOrder = ['virtuosa', 'examenes', 'kiosco']

  const currentProjectPosition = projectOrder.indexOf(projectId)

  const previousProject = projectOrder[currentProjectPosition - 1]

  const nextProject = projectOrder[currentProjectPosition + 1]

  const previousLink = getElement('previous-project')

  const nextLink = getElement('next-project')

  if (previousProject && previousLink) {
    previousLink.hidden = false

    previousLink.href = `proyecto.html?id=${previousProject}`

    setText('previous-project-name', projects[previousProject].title)
  }

  if (nextProject && nextLink) {
    nextLink.hidden = false

    nextLink.href = `proyecto.html?id=${nextProject}`

    setText('next-project-name', projects[nextProject].title)
  }

  /* =======================================
     15. MENSAJE DE CONSOLA
  ======================================= */

  console.log(`Proyecto cargado: ${project.title}`)
})
