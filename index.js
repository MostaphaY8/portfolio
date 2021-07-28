fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {

    var allservices= document.getElementById('AllServices');
        var content= `  <div >
                        <div class="service">
                        <img src="assets/img/front-end.svg" alt="Front End Developer">
                        <h4>Front-end</h4>
                        <p>des</p>
                        </div>
                        </div>` 

           for (let i = 0; i < json.length; i++) {
              var specificcontent=content.replace("assets/img/front-end.svg",json[i].image);
              specificcontent=specificcontent.replace("Front-end",json[i].Service);
              specificcontent=specificcontent.replace("des",json[i].Description);
              var singleService=document.createElement('div')
              singleService.className="col-sm-4";
              singleService.innerHTML=specificcontent;
              allservices.appendChild(singleService);
           }         

  })

  fetch('http://localhost:5000/project')
  .then(response => response.json())
  .then(json => {

    var allservices= document.getElementById('AllProjects');
        var content= `    <div >
                          <div class="portfolio-item">
            <img src="assets/img/portfolio-2.jpg" class="img-res" alt="">
            <div class="portfolio-item-info">
                <h4>Project Title</h4>
                 <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span class="glyphicon glyphicon-eye-open"></span></a>
                 <a href="#"><span class="glyphicon glyphicon-link"></span></a>
           </div>
           </div>
          </div>`

          

           for (let i = 0; i < json.length; i++) {
              var specificcontent=content.replace("assets/img/portfolio-2.jpg",json[i].img);
              specificcontent=specificcontent.replace("Project Title",json[i].title);
          //    specificcontent=specificcontent.replace("",json[i].Desc);
              var singleService=document.createElement('div')
              singleService.className="col-md-4 col-xs-6";
              singleService.innerHTML=specificcontent;
              allservices.appendChild(singleService);
           }        
           
         
         

  })

  
  fetch('http://localhost:1234/model')
  .then(response => response.json())
  .then(json => {

  
         
           var allmodel=document.getElementById('portfolioItem1');

           var modelcontent= `<div >
           <div class="modal-content">
             <div class="modal-header">
               <a class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span></a>
               <img class="img-res" src="assets/img/portfolio-1.jpg" alt="">
             </div>
             <div class="modal-body">
               <h4 class="modal-title">Project title</h4>
               <p>Lorem</p>
             </div>
             <div class="modal-footer">
               <a href="#" class="btn btn-fill">View my work</a>
             </div>
           </div>
         </div>`
 
 
            
            for (let i = 0; i < json.length; i++) {
             var specificcontent1=modelcontent.replace("assets/img/portfolio-1.jpg",json[i].img);
             specificcontent1=specificcontent1.replace("Project title",json[i].title);
             specificcontent1=specificcontent1.replace("Lorem",json[i].Desc);
             specificcontent1=specificcontent1.replace("#",json[i].link);
             var s=document.createElement('div')
             s.className="modal-dialog";
             s.innerHTML=specificcontent1;
             allmodel.appendChild(s);
          } 

  })

  // <a href="#" data-toggle="modal" data-target="#portfolioItem2"><span class="glyphicon glyphicon-eye-open"></span></a>
  // <a href="#"><span class="glyphicon glyphicon-link"></span></a>