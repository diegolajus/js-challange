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
        }
    ];

    filters.map(filter => {
        console.log(filter);
        const node = document.querySelector('#filter-menu');
        const newDiv = node.appendChild(document.createElement('div'));
        newDiv.innerHTML = `${filter}`  
        newDiv.setAttribute('class', 'filter-container-div')
      });
        
    


})();