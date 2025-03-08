
const shoot1Details = [
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    },
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    },
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    },
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    },
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    },
    {
        image: "https://i.ytimg.com/vi/pC7hlK8F4Fw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPtPvi24-qo7gGmmuVHm-MF_pecA",
    }
];
const shoot2Details = [
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
    {
        image: "https://images.squarespace-cdn.com/content/v1/5ccecedd67713500010d87c3/1655449367950-73YP8TTPSDGSRHVU6TGI/newborn-studio-baby-shoot.jpg?format=1000w",
    },
];

function readingShootDetails(data1, data2) {

    const div1 = document.getElementById('shoot1-details');
    const div2 = document.getElementById('shoot2-details');

    data1.forEach(entry => {
        const row = document.createElement('div');
        row.classList.add('photo');

        row.innerHTML =
            `<img src=${entry.image} alt="Project 1">`
            ;

        div1.appendChild(row);
    });
    data2.forEach(entry => {
        const row = document.createElement('div');
        row.classList.add('photo');

        row.innerHTML =
            `<img src=${entry.image} alt="Project 1">`
            ;

        div2.appendChild(row);
    });
}

readingShootDetails(shoot1Details, shoot2Details);
