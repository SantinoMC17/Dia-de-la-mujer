document.addEventListener('DOMContentLoaded', function() {
    // Texto animado de título
    const title = "¡Feliz Día de la Mujer!";
    const titleElement = document.getElementById('title');
    
    setTimeout(() => {
      animateText(title, titleElement);
    }, 500);
    
    // Botón para mostrar frases
    const phraseBtn = document.getElementById('phraseBtn');
    const messageElement = document.getElementById('message');
    
    // Frases de felicitación directas para las mujeres
    const phrases = [
      "¡Felicidades en tu día! Gracias por llenar el mundo de fortaleza, amor y sabiduría cada día.",
      "Hoy celebramos tu valentía, tu fuerza y tu capacidad para transformar el mundo. ¡Feliz día, mujer extraordinaria!",
      "En este día especial, quiero recordarte lo valiosa, increíble y única que eres. ¡Felicidades!",
      "Tu fuerza inspira, tu sonrisa ilumina y tu corazón transforma. Gracias por ser quien eres. ¡Feliz Día de la Mujer!",
      "Que hoy y siempre puedas sentir el orgullo de ser mujer, de ser valiente y de ser imparable. ¡Felicidades!",
      "Detrás de cada logro hay una historia de determinación, esfuerzo y valentía. Gracias por escribir la tuya cada día. ¡Feliz día!",
      "Tu belleza va más allá de lo físico, reside en tu fortaleza, tu bondad y tu capacidad para hacer del mundo un lugar mejor. ¡Feliz Día Internacional de la Mujer!",
      "Celebramos hoy tu luz, tu fuerza y la magia que traes al mundo. Mereces ser celebrada hoy y todos los días.",
      "Gracias por ser ejemplo de fortaleza, perseverancia y amor. El mundo es mejor contigo en él. ¡Feliz día, mujer maravillosa!",
      "En cada desafío demuestras tu fuerza, en cada sonrisa tu belleza y en cada acción tu grandeza. ¡Felicidades en tu día!",
      "Eres fuerte cuando debes serlo, vulnerable cuando lo necesitas y extraordinaria siempre. ¡Feliz Día de la Mujer!",
      "Tu capacidad para amar, luchar y perseverar te hace única e invaluable. Que hoy sientas todo el reconocimiento que mereces."
    ];
    
    phraseBtn.addEventListener('click', function() {
      // Efecto de onda al hacer clic
      const rippleEffect = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const circle = document.createElement('span');
        circle.style.position = 'absolute';
        circle.style.background = 'rgba(255, 255, 255, 0.3)';
        circle.style.borderRadius = '50%';
        circle.style.pointerEvents = 'none';
        circle.style.width = '1px';
        circle.style.height = '1px';
        circle.style.top = y + 'px';
        circle.style.left = x + 'px';
        circle.style.transform = 'scale(0)';
        circle.style.opacity = '1';
        circle.style.transition = 'transform 0.5s, opacity 0.3s';
        
        btn.appendChild(circle);
        
        requestAnimationFrame(() => {
          circle.style.transform = 'scale(150)';
          circle.style.opacity = '0';
          
          setTimeout(() => {
            btn.removeChild(circle);
          }, 500);
        });
      };
      
      rippleEffect(event);
      
      const randomIndex = Math.floor(Math.random() * phrases.length);
      messageElement.style.opacity = 0;
      
      setTimeout(() => {
        messageElement.textContent = phrases[randomIndex];
        messageElement.style.opacity = 1;
        
        // Añadir brillo temporal a la caja de mensaje
        const messageContainer = document.querySelector('.message-container');
        messageContainer.style.boxShadow = '0 0 15px rgba(248, 211, 132, 0.7)';
        messageContainer.style.borderColor = 'var(--dorado)';
        
        setTimeout(() => {
          messageContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
          messageContainer.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }, 1000);
      }, 300);
    });
    
    // Crear elementos decorativos
    createDecorativeElements();
    
    // Añadir destellos a la tarjeta
    addSparkles();
  });
  
  function animateText(text, element) {
    element.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.animationDelay = `${i * 0.1}s`;
      element.appendChild(span);
    }
  }
  
  function createDecorativeElements() {
    const numElements = 30;
    const body = document.body;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    for (let i = 0; i < numElements; i++) {
      // Crear corazones
      if (i % 2 === 0) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const size = Math.random() * 25 + 15;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        heart.style.left = `${Math.random() * windowWidth}px`;
        heart.style.bottom = `-${size}px`;
        heart.style.opacity = Math.random() * 0.6 + 0.2;
        
        const duration = Math.random() * 15 + 15;
        heart.style.animation = `float ${duration}s linear infinite`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        
        // Colores más variados
        const colors = ['var(--rosa-medio)', 'var(--rosa-fuerte)', 'var(--morado-claro)', 'var(--dorado)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundColor = randomColor;
        
        // Aplicar el mismo color a los pseudo-elementos
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
          .heart:nth-child(${i+1}):before, .heart:nth-child(${i+1}):after {
            background-color: ${randomColor};
          }
        `;
        document.head.appendChild(styleTag);
        
        body.appendChild(heart);
      } 
      // Crear flores
      else {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        
        const size = Math.random() * 40 + 20;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        
        // Colores más variados para pétalos
        const petalColors = ['var(--rosa-medio)', 'var(--rosa-claro)', 'var(--morado-claro)', 'var(--morado-medio)'];
        const randomPetalColor = petalColors[Math.floor(Math.random() * petalColors.length)];
        
        for (let j = 0; j < 8; j++) {
          const petal = document.createElement('div');
          petal.classList.add('petal');
          petal.style.width = `${size * 0.3}px`;
          petal.style.height = `${size * 0.5}px`;
          petal.style.top = `${size * 0.25}px`;
          petal.style.left = `${size * 0.35}px`;
          petal.style.transform = `rotate(${j * 45}deg)`;
          petal.style.backgroundColor = randomPetalColor;
          
          flower.appendChild(petal);
        }
        
        const center = document.createElement('div');
        center.classList.add('center');
        center.style.width = `${size * 0.3}px`;
        center.style.height = `${size * 0.3}px`;
        center.style.top = `${size * 0.35}px`;
        center.style.left = `${size * 0.35}px`;
        flower.appendChild(center);
        
        flower.style.left = `${Math.random() * windowWidth}px`;
        flower.style.bottom = `-${size}px`;
        
        const duration = Math.random() * 20 + 15;
        flower.style.animation = `floatAndRotate ${duration}s linear infinite`;
        flower.style.animationDelay = `${Math.random() * 15}s`;
        
        body.appendChild(flower);
      }
    }
  }
  
  function addSparkles() {
    const card = document.querySelector('.card');
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      // Posición aleatoria en los bordes de la tarjeta
      const randomEdge = Math.floor(Math.random() * 4);
      let x, y;
      
      switch (randomEdge) {
        case 0: // Borde superior
          x = Math.random() * 100 + '%';
          y = '0%';
          break;
        case 1: // Borde derecho
          x = '100%';
          y = Math.random() * 100 + '%';
          break;
        case 2: // Borde inferior
          x = Math.random() * 100 + '%';
          y = '100%';
          break;
        case 3: // Borde izquierdo
          x = '0%';
          y = Math.random() * 100 + '%';
          break;
      }
      
      sparkle.style.left = x;
      sparkle.style.top = y;
      sparkle.style.animationDelay = `${Math.random() * 3}s`;
      
      card.appendChild(sparkle);
    }
  }