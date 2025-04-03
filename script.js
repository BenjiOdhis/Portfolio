document.addEventListener("DOMContentLoaded", () => {
    // 🚀 Page Load Animation
document.body.classList.remove("preload");
document.body.classList.add("loaded");

    // 🌗 Theme Toggle with Saved Preference
    const toggleBtn = document.getElementById("toggle-theme");
    const prefersDark = localStorage.getItem("theme") === "dark";
  
    // Apply saved theme on load
    if (prefersDark) {
      document.body.classList.add("dark");
    }
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    }
  
    // 🎬 Animated Hero Intro
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const scrollIndicator = document.querySelector(".scroll-indicator");
  
    if (heroTitle && heroSubtitle && scrollIndicator) {
      const name = "Hello, I'm Benjamin";
      let i = 0;
  
      function typeTitle() {
        if (i < name.length) {
          heroTitle.textContent += name.charAt(i);
          i++;
          setTimeout(typeTitle, 100);
        } else {
          setTimeout(() => {
            heroSubtitle.classList.remove("hidden");
            heroSubtitle.classList.add("visible");
          }, 600);
          setTimeout(() => {
            scrollIndicator.classList.remove("hidden");
            scrollIndicator.classList.add("visible");
          }, 1200);
        }
      }
  
      typeTitle();
    }
  
    // 📨 Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("✅ Message sent! (Just kidding — this is a demo form 😅)");
        contactForm.reset();
      });
    }
  
    // 💡 Scroll Animations
    const animatedSections = document.querySelectorAll(".animate");
    const animateOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      animatedSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
  
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // trigger once on page load
  
    // 🖼 Animate Profile Image
    const profileImage = document.querySelector(".animate-img");
    if (profileImage) {
      setTimeout(() => {
        profileImage.classList.add("visible");
      }, 300);
    }
  
    // ✍️ Typewriter About Me Effect
    const typewriterText = document.getElementById("typewriter-text");
    if (typewriterText) {
      const sentences = [
        "I build beautiful and functional web experiences.",
        "I love solving real-world problems with code.",
        "I enjoy writing clean, accessible websites.",
      ];
  
      let sentenceIndex = 0;
      let charIndex = 0;
      let currentSentence = sentences[sentenceIndex];
      let isDeleting = false;
  
      function type() {
        if (!isDeleting) {
          typewriterText.textContent = currentSentence.substring(0, charIndex + 1);
          charIndex++;
  
          if (charIndex === currentSentence.length) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
          }
        } else {
          typewriterText.textContent = currentSentence.substring(0, charIndex - 1);
          charIndex--;
  
          if (charIndex === 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            currentSentence = sentences[sentenceIndex];
          }
        }
  
        setTimeout(type, isDeleting ? 30 : 75);
      }
  
      type();
      // 📊 Animate Skills on Scroll
const skillFills = document.querySelectorAll(".skill-fill");
const skillsSection = document.getElementById("skills");

const animateSkills = () => {
  skillFills.forEach(fill => {
    const percent = fill.getAttribute("data-percent");
    fill.style.width = percent;
  });
};

const handleSkillScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < triggerBottom) {
    animateSkills();
    window.removeEventListener("scroll", handleSkillScroll); // only once
  }
};

window.addEventListener("scroll", handleSkillScroll);
// 🖼️ Featured Project Modal Logic
const viewMoreBtn = document.querySelector(".view-more-btn");
const modal = document.getElementById("project-modal");
const closeModal = document.querySelector(".close-modal");

if (viewMoreBtn && modal && closeModal) {
  viewMoreBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
// 🎨 Custom Color Picker Logic
const colorPicker = document.getElementById("theme-color");
const savedColor = localStorage.getItem("accentColor");

if (savedColor) {
  document.documentElement.style.setProperty("--accent-color", savedColor);
  colorPicker.value = savedColor;
}

if (colorPicker) {
  colorPicker.addEventListener("input", (e) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty("--accent-color", newColor);
    localStorage.setItem("accentColor", newColor);
  });
}



    }
  });
  