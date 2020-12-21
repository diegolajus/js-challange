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

    const createNewElement = (type, content, attr, value) => {

        const newElement = document.createElement(type);

        if (attr && value && attr === 'class') {
            newElement.setAttribute(attr, value);
        }

        if (content) {
            newElement.innerHTML = content;
        }

        return newElement;
    }

    const createJobDiv = (props) => {
        const imageDiv = createNewElement('DIV', null, 'class', 'image-container');
        imageDiv.appendChild(createNewElement('IMG'))
    }

    filters.forEach(filter => {
        const filterMenu = document.querySelector('#filter-menu');
        filterMenu.appendChild(createNewElement('DIV', filter, 'class', 'filter-container-div'));
    });

    jobOffers.forEach(offer => {
        const jobsContainer = document.querySelector('#jobs-container');
        jobsContainer.appendChild(createJobDiv(offer));

    });




})();