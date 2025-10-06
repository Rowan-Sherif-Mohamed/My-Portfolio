document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          const el = document.querySelector(href);
          if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      })
    })

    // Simple reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(ent=>{
        if(ent.isIntersecting){
          ent.target.classList.add('visible');
        }
      })
    },{threshold:0.12});
    reveals.forEach(r=>io.observe(r));

    // Contact form - fake submit (replace with real backend later)
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();
      if(!name || !email || !message){
        alert('Please fill all fields.');
        return;
      }
      // Simulate send
      alert('Message sent (simulation). Edit the code to connect a real endpoint.');
      this.reset();
    });

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();
    