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
            }
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


    filters.forEach(filter => {
        
        const node = document.querySelector('#filter-menu');
        const newDiv = node.appendChild(document.createElement('div'));
        newDiv.innerHTML = `${filter}`  
        newDiv.setAttribute('class', 'filter-container-div')
      });

    jobOffers.forEach(jobs =>{
        const container = document.querySelector(".container")
        const newCont = document.createElement("div")       
        
        newCont.setAttribute("class", "job-container")
        const jobContainer = newCont.setAttribute("class", "job-container")

        const imageContainer = jobContainer.appendChild(newCont.setAttribute("class", "image-container"))
        console.log(imageContainer)
 

       
       

        
        
    })
        
    
    

})();