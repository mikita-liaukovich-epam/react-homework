const assetsPath = './assets/';

const VODList = [
    {
        id: "JH46520TH",
        title: "Pulp Fiction",
        genre: "action",
        date: {
            year: "1994",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Fiction.com",
        src: "Pulp_Fiction.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Runtime Fiction",
    },
    {
        id: "OM23820TH",
        title: "Bohemian Rhapsody",
        genre: "drama",
        date: {
            year: "2018",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Rhapsody.com",
        src: "Bohemian_Rhapsody.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Runtime Rhapsody",
    },
    {
        id: "OO33320TH",
        title: "Kill Bill: Vol 2",
        genre: "oscar",
        date: {
            year: "1994",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Bill2.com",
        src: "Kill_Bill_2.png",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Runtime Text Bill",
    },
    {
        id: "KO32620TH",
        title: "Avengers: Infinity War",
        genre: "action",
        date: {
            year: "2018",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Avengers.com",
        src: "Avengers.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Runtime Avengers Text",
    },
    {
        id: "MO30820TH",
        title: "Inception",
        genre: "action",
        date: {
            year: "2010",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Inception.com",
        src: "Inception.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Inception Text",
    },
    {
        id: "MO328110TH",
        title: "Reservoir Dogs",
        genre: "oscar",
        date: {
            year: "1994",
            month: "01",
            day: "31"
        },
        rating: 4.3,
        duration: 154,
        url: "Dogs.com",
        src: "Reservoir_Dogs.jpg",
        overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper velit sit amet lacus faucibus, sit amet pharetra libero rutrum. Aenean egestas feugiat justo, nec congue metus mattis non. Nulla et nulla sit amet massa fermentum imperdiet. Curabitur at vestibulum leo. Etiam at varius nisi, eget sodales sem. Vestibulum porttitor nec velit sit amet cursus. Nullam feugiat sagittis mauris et vehicula. Nulla vel lectus ligula. Ut accumsan libero arcu. Nam vitae aliquet diam, ac rutrum ligula. Mauris efficitur ligula magna, eu consequat enim vestibulum eget. Suspendisse egestas dignissim nibh, sed cursus turpis ultrices ac.",
        runtime: "Runtime Dogs",
    }
]

module.exports = {
    assetsPath,
    VODList
}