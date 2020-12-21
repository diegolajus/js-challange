(() => {

    const filters = [
        'Frontend',
        'CSS',
        'Senior',
        'HTML',
        'JavaScript',
        'FullStack',
        'Python',
        'React',
        'Sass',
        'Backend'
    ];

    const jobOffers = [
        {
            companyName: 'Photosnap',
            jobName: 'Senior Frontend Developer',
            details: {
                date: '1d ago',
                workingDay: 'Full Time',
                location: 'USA Only'
            },
            tecno:[" Front End "," Senior "," HTML "," CSS "," Javascript "],
        },

        {
            companyName: 'Manage',
            jobName: 'Fullstack Developer',
            details: {
                date: '1d ago',
                workingDay: 'Part Time',
                location: 'Remote'
            }
        },

        {
            companyName: 'Account',
            jobName: 'Junior Front Developer',
            details: {
                date: '2d ago',
                workingDay: 'Part Time',
                location: 'USA Only'
            }
        },

        {
            companyName: 'MyHome',
            jobName: 'Junior Front Developer',
            details: {
                date: '5d ago',
                workingDay: 'Contract',
                location: 'USA Only'
            }
        },

        {
            companyName: 'Loop Studios',
            jobName: 'Software Engineer',
            details: {
                date: '1w ago',
                workingDay: 'Full Time',
                location: 'WorldWide'
            }
        }
    ];


    // FOR EACH PER CREAR EL MENU DELS FILTRES
    filters.forEach(filter => {       
        const node = document.querySelector('#filter-menu');
        const newDiv = node.appendChild(document.createElement('div'));
        newDiv.innerHTML = `${filter}`  
        newDiv.setAttribute('class', 'filter-container-div')
    });

    
    jobOffers.forEach(jobs =>{
        const container = document.querySelector(".container")
        const newCont = document.createElement("div")             
        container.appendChild(document.createElement("div")).setAttribute("class", "job-container" )  ;
        macroDiv() 
        
                         
    });
    
    //FUNCIO QUE CREA EL DIV "complet" QUE NECSITEM DINS DE CADA JOB-OFFER
    function macroDiv(){        

        //image-container
        function imageFunction(){
        const jobContainer = document.querySelector(".job-container")
        const newCont = document.createElement("div")       
        const imageContainer = newCont.setAttribute("class", "image-container")
        jobContainer.appendChild(newCont)
        }
        function dataFunction(){
        //data-container
        const jobContainer = document.querySelector(".job-container")
        const newCont = document.createElement("div")        
        const dataContainer = newCont.setAttribute("class", "data-container")
        jobContainer.appendChild(newCont)
        
            function createCompanyNameDiv(){
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "company-name")
                dataContainer.appendChild(newCont)
                newCont.textContent = `${jobOffers[0].companyName}`
            }
            function createJobRequestDiv(){
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "job-request")
                dataContainer.appendChild(newCont)
                newCont.textContent = `${jobOffers[0].jobName}`
            }
            function createJobDetailsDiv(){
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "job-details")
                dataContainer.appendChild(newCont)
                newCont.textContent = `${jobOffers[0].details.date}`+`${jobOffers[0].details.workingDay}`+`${jobOffers[0].details.location}`
            }
            createCompanyNameDiv()
            createJobRequestDiv()
            createJobDetailsDiv()
       }
        function filterFunction(){
       //filter-container
        const jobContainer = document.querySelector(".job-container")
        const newCont = document.createElement("div")        
        const filterContainer = newCont.setAttribute("class", "filter-container-div")
        jobContainer.appendChild(newCont)
        newCont.innerHTML = `${jobOffers[0].tecno[0]}`+`${jobOffers[0].tecno[1]}`+`${jobOffers[0].tecno[2]}`+`${jobOffers[0].tecno[3]}`+`${jobOffers[0].tecno[4]}`
        }
    imageFunction()
    dataFunction()
    filterFunction()        
    }
   
    

    
    


    
})();