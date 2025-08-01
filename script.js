document.addEventListener('scroll',function(){
    const sections=document.querySelectorAll('.home, .about,.projets, .contact');
    sections.forEach(section=>{
        if(section.getBoundingClientRect().top<window.innerHeight){
            section.classList.add('fade-in');
        }

        });

        });
