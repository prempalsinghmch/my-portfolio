
// $('.progress-container').show();
      $(function(){
        
        $(".navbar").load("nav.html"); 

        $(document).ready(function(){
          let deps=get_deps();
          console.log(deps);
          let i=0;
          for (i; i<deps.length; i++){
            let x = deps[i]
            let str = `<a class="dropdown-item" href="/treatments.html?name=${x}">${x}</a>`
            $('.dropdown-menu').append(str);
          }
        });

      });
      $(function(){
        $(".footer-section").load("footer.html"); 
      });
    
      $('.progress-container').hide();

      