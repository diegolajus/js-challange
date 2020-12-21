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
            details: [
                { date: '1d ago' },
                { workingDay: 'Full Time' },
                { location: 'USA Only' }
            ],
            filters: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
            companyLogo: './images/photosnap.svg'
        },

        {
            companyName: 'Manage',
            jobName: 'Fullstack Developer',
            details: [
                { date: '1d ago' },
                { workingDay: 'Part Time' },
                { location: 'Remote' }
            ],
            filters: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
            companyLogo: './images/manage.svg'
        },

        {
            companyName: 'Account',
            jobName: 'Junior Front Developer',
            details: [
                { date: '2d ago' },
                { workingDay: 'Part Time' },
                { location: 'USA Only' }
            ],
            filters: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
            companyLogo: './images/account.svg'
        },

        {
            companyName: 'MyHome',
            jobName: 'Junior Front Developer',
            details: [
                { date: '5d ago' },
                { workingDay: 'Contract' },
                { location: 'USA Only' }
            ],
            filters: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
            companyLogo: './images/myhome.svg'
        },

        {
            companyName: 'Loop Studios',
            jobName: 'Software Engineer',
            details: [
                { date: '1w ago' },
                { workingDay: 'Full Time' },
                { location: 'WorldWide' }
            ],
            filters: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
            companyLogo: './images/loop-studios.svg'
        }
    ];
    let filtresActius = [];


    
    const createNewElement = (type, content, attr, value) => {

        const newElement = document.createElement(type);

        if (attr && value) {
            newElement.setAttribute(attr, value);
        }

        if (typeof (content) === 'string') {
            newElement.innerHTML = content;
        }

        if (typeof (content === 'object')) {
            if (value === 'job-details') {
                let jobDetails = '';
                content.forEach((el, index) => {
                    const key = Object.keys(el)
                    if (index === 0) {
                        return jobDetails = el[key];
                    } else {
                        return jobDetails = jobDetails + ` · ${el[key]}`;
                    }
                })

                newElement.innerHTML = jobDetails;
            }
        }
        return newElement;
    }


    // crear map perk ens crea una array y ens retorna unaltra array
    // bucle de filtres y ofertes, aquelles on coincideixi oferta y filtre, amb un return safegirá al new array
    // hint : filter()

    function renderOffers(){
        const newArray = filtresActius.map()
        jobOffers.forEach((offer, index) => {
            const jobsContainer = document.querySelector('#jobs-container')
            jobsContainer.append(createNewElement('DIV', null, 'class', 'job-container'));
            const jobContainer = document.querySelectorAll('.job-container')
            const thisJobContainer = jobContainer[index]
            thisJobContainer.appendChild(createNewElement('DIV', null, 'class', 'image-container'));
            const imageContainer = document.querySelectorAll('.image-container');
            const thisImageContainer = imageContainer[index];
            thisImageContainer.appendChild(createNewElement('IMG', null, 'src', offer.companyLogo))
            thisJobContainer.appendChild(createNewElement('DIV', null, 'class', 'data-container'));
            const dataContainer = document.querySelectorAll('.data-container')
            const thisDataContainer = dataContainer[index]
            thisDataContainer.appendChild(createNewElement('DIV', offer.companyName, 'class', 'company-name'));
            thisDataContainer.append(createNewElement('DIV', offer.jobName, 'class', 'job-request'));
            thisDataContainer.append(createNewElement('DIV', offer.details, 'class', 'job-details')); 
            thisJobContainer.append(createNewElement('DIV', null, 'class', 'filter-container'));
            const filterContainer = document.querySelectorAll('.filter-container');
            const thisFilterContainer = filterContainer[index];
            offer.filters.forEach(filter => {
                thisFilterContainer.appendChild(createNewElement('DIV', filter, 'class', 'filter-container-div'));
            });
        });

    }
    filters.forEach((filter, index) => {
        const filterMenu = document.querySelector('#filter-menu');
        filterMenu.appendChild(createNewElement('DIV', filter, 'class', 'filter-container-div'));

        const filterSelection = document.querySelectorAll(".filter-container-div")

        const thisFilterSelection  = filterSelection[index]

        thisFilterSelection.addEventListener("click",function(){
            filtresActius.push(thisFilterSelection.innerHTML)
            renderOffers()
        });
        
    
    });

    // jobOffers.forEach((offer, index) => {
    //     const jobsContainer = document.querySelector('#jobs-container')
    //     jobsContainer.append(createNewElement('DIV', null, 'class', 'job-container'));
    //     const jobContainer = document.querySelectorAll('.job-container')
    //     const thisJobContainer = jobContainer[index]
    //     thisJobContainer.appendChild(createNewElement('DIV', null, 'class', 'image-container'));
    //     const imageContainer = document.querySelectorAll('.image-container');
    //     const thisImageContainer = imageContainer[index];
    //     thisImageContainer.appendChild(createNewElement('IMG', null, 'src', offer.companyLogo))
    //     thisJobContainer.appendChild(createNewElement('DIV', null, 'class', 'data-container'));
    //     const dataContainer = document.querySelectorAll('.data-container')
    //     const thisDataContainer = dataContainer[index]
    //     thisDataContainer.appendChild(createNewElement('DIV', offer.companyName, 'class', 'company-name'));
    //     thisDataContainer.append(createNewElement('DIV', offer.jobName, 'class', 'job-request'));
    //     thisDataContainer.append(createNewElement('DIV', offer.details, 'class', 'job-details')); 
    //     thisJobContainer.append(createNewElement('DIV', null, 'class', 'filter-container'));
    //     const filterContainer = document.querySelectorAll('.filter-container');
    //     const thisFilterContainer = filterContainer[index];
    //     offer.filters.forEach(filter => {
    //         thisFilterContainer.appendChild(createNewElement('DIV', filter, 'class', 'filter-container-div'));
    //     });
    // });

    /*
    // FOR EACH PER CREAR EL MENU DELS FILTRES
    filters.forEach(filter => {
        const node = document.querySelector('#filter-menu');
        const newDiv = node.appendChild(document.createElement('div'));
        newDiv.innerHTML = `${filter}`
        newDiv.setAttribute('class', 'filter-container-div')
    });


    jobOffers.forEach(jobs => {
        const container = document.querySelector(".container");
        newCont = container.appendChild(document.createElement("div"));
        newCont.setAttribute("class", "job-container");
        document.querySelector('.job-container').append(macroDiv())
    */

    //FUNCIO QUE CREA EL DIV "complet" QUE NECSITEM DINS DE CADA JOB-OFFER
    /*
    function macroDiv() {

        //image-container
        function imageFunction() {
            const jobContainer = document.querySelector(".job-container")
            const newCont = document.createElement("div")
            const imageContainer = newCont.setAttribute("class", "image-container")
            jobContainer.appendChild(newCont)
        }
        function dataFunction() {
            //data-container
            const jobContainer = document.querySelector(".job-container")
            const newCont = document.createElement("div")
            const dataContainer = newCont.setAttribute("class", "data-container")
            jobContainer.appendChild(newCont)

            function createCompanyNameDiv() {
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "company-name")
                dataContainer.appendChild(newCont)
                return newCont.textContent = `${jobOffers[0].companyName}`
            }
            function createJobRequestDiv() {
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "job-request")
                dataContainer.appendChild(newCont)
                return newCont.textContent = `${jobOffers[0].jobName}`
            }
            function createJobDetailsDiv() {
                const dataContainer = document.querySelector(".data-container")
                const newCont = document.createElement("div")
                const dataContainer2 = newCont.setAttribute("class", "job-details")
                dataContainer.appendChild(newCont)
                return newCont.textContent = `${jobOffers[0].details.date}` + `${jobOffers[0].details.workingDay}` + `${jobOffers[0].details.location}`
            }
            return (
                createCompanyNameDiv(),
                createJobRequestDiv(),
                createJobDetailsDiv()
            )

        }
        function filterFunction() {
            //filter-container
            const jobContainer = document.querySelector(".job-container")
            const newCont = document.createElement("div")
            const filterContainer = newCont.setAttribute("class", "filter-container-div")
            jobContainer.appendChild(newCont)
            newCont.innerHTML = `${jobOffers[0].tecno[0]}` + `${jobOffers[0].tecno[1]}` + `${jobOffers[0].tecno[2]}` + `${jobOffers[0].tecno[3]}` + `${jobOffers[0].tecno[4]}`
        }
        return (
            imageFunction(),
            dataFunction(),
            filterFunction()
        )

    }
    */








})();