kiosk.factory('ServerData', ['$http', function($http) {
    var data = [
        {
            title: 'News',
            color: '#f7b538',
            heroImage: '/assets/img/inglemoor.png',
            type: 'frontView',
            data: {
                title: 'Welcome to Inglemoor High School!',
                description: '<b>Goal of the day:</b> Introduce yourself to one new person.',
                articles: {
                    primary: [
                        {
                            imageUrl: 'http://wwwnew.nsd.org/cms/lib08/WA01918953/Centricity/ModuleInstance/2088/large/IHS_MUN_PG.jpg?rnd=0.635781922673705',
                            title: 'Vancouver Model United Nations',
                            short: 'Inglemoor Vikings recently went to a Model United Nations conference in Vancouver, BC.',
                            description: 'Congratulations to Inglemoor‘s Bryce Lane, Laura Srebnik, Makisa Bronson, Julia Stout and Tristan Wisnot for earning Best Delegate awards; to Tobin Hansen and Arthur Taylor for earning Outstanding Delegate awards; and to Hayden McTavish and Molly Lie for earning Honorable Mention awards at the Vancouver Model Untied Nations (VMUN) January conference held in Vancouver, B.C.'
                        },
                        {
                            imageUrl: 'http://wwwnew.nsd.org/cms/lib08/WA01918953/Centricity/ModuleInstance/2088/large/IMG_9741.jpg?rnd=0.44954810871256',
                            title: 'College Signings',
                            short: 'Some talented Vikings signed to play collegiate sports next year.',
                            description: 'Congratulations to Ifeoma Emeka (Air Force), Melanie Schakohl (Western Oregon), and Kennedy Nicholas (CSU Sacramento State) for signing to play women\'s basketball at the collegiate level next year.'
                        }
                    ],
                    secondary: [
                        {
                            title: 'Career and College Readiness',
                            description: 'Learn about student programs in business, engineering, design, robotics, and others. Plus, a keynote speaker!',
                            info: 'Wednesday Feb. 10 from 6-8:30pm @ Bothell High School NPAC'
                        },
                        {
                            title: 'Career and College Readiness',
                            description: 'Learn about student programs in business, engineering, design, robotics, and others. Plus, a keynote speaker!',
                            info: 'Wednesday Feb. 10 from 6-8:30pm @ Bothell High School NPAC'
                        }
                    ]
                }
            }
        },
        {
            title: 'Sports',
            color: '#499f68',
            heroImage: '/assets/img/waterpolo.png',
            type: 'sportsView',
            data: {
                title: 'Sports',
                description: 'Results from the past week.',
                results: [
                    {
                        team: 'Water Polo',
                        opponent: 'Mercer Island',
                        score: '5-0'
                    },
                    {
                        team: 'Girls\' Basketball',
                        opponent: 'Redmond',
                        score: '24-25'
                    },
                    {
                        team: 'Wrestling',
                        opponent: 'Woodinville',
                        score: 'tied'
                    }
                ]
            }
        },
        {
            title: 'Calendar',
            color: '#9b59b6',
            type: 'calendarView',
            data: {
                events: [
                    {
                        name: 'AMC',
                        description: 'American Mathematics Competition test is available to all students. Ask your math teacher for more information and to sign up.',
                        dateStart: '02-02-2016',
                        dateEnd: '02-02-2016',
                        time: '8am-10am',
                        where: 'Cafeteria'
                    },
                    {
                        name: 'Biology EOC Re-takes',
                        description: '',
                        dateStart: '02-04-2016',
                        dateEnd: '02-04-2016',
                        time: '',
                        where: 'Library'
                    },
                    {
                        name: 'Solo & Ensemble',
                        description: 'Orchestra, band, and choir students will perform.',
                        dateStart: '02-06-2016',
                        dateEnd: '02-06-2016',
                        time: '8am-5pm',
                        where: 'Woodinville High School'
                    },
                    {
                        name: 'Pre-TOK Meeting 3 (M-Z)',
                        description: 'Class of 2017 with last names M-Z.',
                        dateStart: '02-10-2016',
                        dateEnd: '02-10-2016',
                        time: '12:30pm-1:50pm',
                        where: 'Library'
                    },
                    {
                        name: 'G4 Project',
                        description: 'For all those testing in IB Science. Check with your science teacher for details.',
                        dateStart: '02-05-2016',
                        dateEnd: '02-05-2016',
                        time: '7:20am-1:55pm',
                        where: 'Inglemoor High School'
                    },
                    {
                        name: 'Scandia Staff Late Night',
                        description: '',
                        dateStart: '02-11-2016',
                        dateEnd: '02-11-2016',
                        time: '2pm-12am',
                        where: '400 building'
                    },
                    {
                        name: 'Presidents\' Day',
                        description: 'No school',
                        dateStart: '02-15-2016',
                        dateEnd: '02-15-2016',
                        time: '',
                        where: ''
                    },
                    {
                        name: 'Mid-winter break',
                        description: 'No school!!',
                        dateStart: '02-16-2016',
                        dateEnd: '02-19-2016',
                        time: '',
                        where: ''
                    },
                    {
                        name: 'DECA Pre-State',
                        description: 'Feedback.',
                        dateStart: '02-27-2016',
                        dateEnd: '02-27-2016',
                        time: 'Morning',
                        where: 'Cafeteria'
                    },
                    {
                        name: 'DECA State Competition',
                        description: 'In Bellevue - not too exotic.',
                        dateStart: '03-03-2016',
                        dateEnd: '03-05-2016',
                        time: 'All day',
                        where: 'Meydenbauer Center'
                    },
                ]
            }
        },
        {
            title: 'Schedule',
            color: '#fc7a57',
            type: 'scheduleView',
            data: {
                schedules: [
                    {
                        title: 'Monday',
                        subtitle: 'Block Schedule',
                        schedule: [
                            { 'label': 'Period 1', 'start': '7:20 am', 'end': '9:05 am' },
                            { 'label': 'GMI', 'start': '9:05 am', 'end': '9:15 am' },
                            { 'label': 'Club / Study', 'start': '9:15 am', 'end': '9:35 am' },
                            { 'label': 'Period 3', 'start': '9:40 am', 'end': '12:05 pm' },
                            { 'label': 'First Lunch', 'start': '10:40 am', 'end': '11:10 am' },
                            { 'label': 'Second Lunch', 'start': '11:30 am', 'end': '12:05 pm' },
                            { 'label': 'Period 5', 'start': '12:10 pm', 'end': '1:55 pm' },
                            { 'label': 'Period 7', 'start': '2:00 pm', 'end': '3:05 pm' }
                        ]
                    },
                    {
                        title: 'Tuesday',
                        subtitle: 'Block Schedule',
                        schedule: [
                            { 'label': 'Period 2', 'start': '7:20 am', 'end': '9:05 am' },
                            { 'label': 'GMI', 'start': '9:05 am', 'end': '9:15 am' },
                            { 'label': 'Club / Study', 'start': '9:15 am', 'end': '9:35 am' },
                            { 'label': 'Period 4', 'start': '9:40 am', 'end': '12:05 pm' },
                            { 'label': 'First Lunch', 'start': '10:40 am', 'end': '11:10 am' },
                            { 'label': 'Second Lunch', 'start': '11:30 am', 'end': '12:05 pm' },
                            { 'label': 'Period 6', 'start': '12:10 pm', 'end': '1:55 pm' },
                            { 'label': 'Period 7', 'start': '2:00 pm', 'end': '3:05 pm' }
                        ]
                    },
                    {
                        title: 'Wednesday',
                        subtitle: 'Short Schedule',
                        schedule: [
                            { 'label': 'Period 1', 'start': '7:20 am', 'end': '8:00 am' },
                            { 'label': 'Period 2', 'start': '8:05 am', 'end': '8:45 am' },
                            { 'label': 'Period 3', 'start': '8:50 am', 'end': '9:30 am' },
                            { 'label': 'Period 4', 'start': '9:35 am', 'end': '10:15 am' },
                            { 'label': 'Period 5', 'start': '10:20 am', 'end': '11:35 am' },
                            { 'label': 'First Lunch', 'start': '10:20 am', 'end': '10:50 am' },
                            { 'label': 'Second Lunch', 'start': '11:05 am', 'end': '11:35 am' },
                            { 'label': 'Period 6', 'start': '11:40 am', 'end': '12:20 pm' }
                        ]
                    },
                    {
                        title: 'Thursday',
                        subtitle: 'Regular Schedule',
                        schedule: [
                            { 'label': 'Period 1', 'start': '7:20 am', 'end': '8:15 am' },
                            { 'label': 'Period 2', 'start': '8:20 am', 'end': '9:15 am' },
                            { 'label': 'Period 3', 'start': '9:25 am', 'end': '10:20 am' },
                            { 'label': 'Period 4', 'start': '10:25 am', 'end': '11:55 am' },
                            { 'label': 'First Lunch', 'start': '10:25 am', 'end': '10:50 am' },
                            { 'label': 'Second Lunch', 'start': '10:25 am', 'end': '11:55 am' },
                            { 'label': 'Period 5', 'start': '12:00 pm', 'end': '12:55 pm' },
                            { 'label': 'Period 6', 'start': '1:00 pm', 'end': '1:55 pm' },
                            { 'label': 'Period 7', 'start': '2:00 pm', 'end': '3:05 pm' }
                        ]
                    },
                    {
                        title: 'Friday',
                        subtitle: 'Regular Schedule',
                        schedule: [
                            { 'label': 'Period 1', 'start': '7:20 am', 'end': '8:15 am' },
                            { 'label': 'Period 2', 'start': '8:20 am', 'end': '9:15 am' },
                            { 'label': 'Period 3', 'start': '9:25 am', 'end': '10:20 am' },
                            { 'label': 'Period 4', 'start': '10:25 am', 'end': '11:55 am' },
                            { 'label': 'First Lunch', 'start': '10:25 am', 'end': '10:50 am' },
                            { 'label': 'Second Lunch', 'start': '10:25 am', 'end': '11:55 am' },
                            { 'label': 'Period 5', 'start': '12:00 pm', 'end': '12:55 pm' },
                            { 'label': 'Period 6', 'start': '1:00 pm', 'end': '1:55 pm' },
                            { 'label': 'Period 7', 'start': '2:00 pm', 'end': '3:05 pm' }
                        ]
                    }
                ]
            }
        },
        {
            title: 'IDEA',
            color: '#00798c',
            heroImage: '/assets/img/teamIDEA.png',
            type: 'ideaView',
            data: {
                title: 'Team IDEA',
                description: 'Our classes are wrapping up their last projects and moving onto the next.',
                columns: [
                    {
                        title: 'IBDT',
                        subtitle: 'Eating on the Go',
                        iframeUrl: 'http://instansive.com/widgets/6cd2003372ad2b83ea4ab04f889885ba67662dc9.html',
                        description: 'Students are to design a product that makes it easier to eat on the go. 4 weeks for design & fabrication.'
                    },
                    {
                        title: 'SED',
                        subtitle: 'Wind Turbine',
                        iframeUrl: 'http://instansive.com/widgets/839eeb230fea64479f097318ec3431bd24f22908.html',
                        description: 'The goal of this challenge is to design a wind turbine configuration to maximize power output (minimize drag & maximize lift). 3 weeks for independent research, fabrication & measurement.'
                    }
                ]
            }
        },
    ];

    function getData(typeName) {
        if(typeName) {
            var returnData;
            for(var i = 0; i < data.length; i++) {
                if(data[i].type == typeName) {
                    returnData = data[i];
                    break;
                }
            }
            return returnData;
        }
        else {
            return data;
        }
    }

    return {
        get: getData
    }
}]);
