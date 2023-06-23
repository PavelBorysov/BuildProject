const buildItem = document.querySelectorAll('.build')
const buildValue = document.querySelector('#build-value')
const stagesValue = document.querySelector('#stages-value')
const flatsValue = document.querySelector('#flats-value')
const buildDescriptions = document.querySelector('.build-info__descriptions')

const stageItem = document.querySelectorAll('.stage')
const floorsdValue = document.querySelector('#floor-value')
const saleValue = document.querySelector('#sale-value')
const bookingValue = document.querySelector('#booking-value')
const actionValue = document.querySelector('#action-value')
const soldValue = document.querySelector('#sold-value')

buildItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataBuildNumber = item.getAttribute('data-build-number');
        const dataStageNumber = item.getAttribute('data-stages-number');
        const dataFlatsValue = item.getAttribute('data-flats-number');
        const dataBuildDescriptions = item.getAttribute('data-descriptions');
        buildValue.innerHTML = dataBuildNumber;
        stagesValue.innerHTML = dataStageNumber;
        flatsValue.innerHTML = dataFlatsValue;
        buildDescriptions.innerHTML = dataBuildDescriptions;
    })
})

stageItem.forEach(item => {
    item.addEventListener('mouseover', function() {
        const dataFloorsNumber = item.getAttribute('data-floors');
        const dataApartmentNumber = item.getAttribute('data-apartment-sale');
        const dataBookingValue = item.getAttribute('data-apartment-booked');
        const dataActionValue = item.getAttribute('data-apartment-action');
        const dataSoldValue = item.getAttribute('data-apartment-sold');
        const dataBuildDescriptions = item.getAttribute('data-descriptions');
        floorsdValue.innerHTML = dataFloorsNumber;
        saleValue.innerHTML = dataApartmentNumber;
        bookingValue.innerHTML = dataBookingValue;
        actionValue.innerHTML = dataActionValue;
        soldValue.innerHTML = dataSoldValue;
        buildDescriptions.innerHTML = dataBuildDescriptions;
    })
})

const buildLink = document.querySelectorAll('.build-link')
buildLink.forEach(link => {
    link.addEventListener('click', function(event) {
        if (link.classList.contains('sold')) {
            event.preventDefault();
            alert('Дом продан')
        } else {
            null
        }
    })
})

const flat = document.querySelectorAll('.flat');

flat.forEach(item => {
    if (item.classList.contains('booking')) {
        item.querySelector('.status-text').innerHTML = "Бронь";
    } else if (item.classList.contains('sold')) {
        item.querySelector('.status-text').innerHTML = "Продано";
    } else if (item.classList.contains('free')) {
        item.querySelector('.status-text').innerHTML = "Свободно";
    } else {
        item.querySelector('.status-text').innerHTML = "Акция";
    }
})

const flatArray = [
    {
    id: 0,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82.3 м.кв",
    price: "700$",
    priceTotal: "52500$",
    title: "Номер квартиры №1",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        }
    ]
},
{
    id: 1,
    house: "2",
    floor: "1",
    rooms: "2",
    square: "60.7 м.кв",
    price: "700$",
    priceTotal: "42000$",
    title: "Номер квартиры №3",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 2,
    house: "2",
    floor: "1",
    rooms: "2",
    square: "60.7 м.кв",
    price: "700$",
    priceTotal: "42000$",
    title: "Номер квартиры №3",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 3,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "82 м.кв",
    price: "700$",
    priceTotal: "52000$",
    title: "Номер квартиры №4",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 4,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.7 м.кв",
    price: "700$",
    priceTotal: "55790$",
    title: "Номер квартиры №5",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 5,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м.кв",
    price: "700$",
    priceTotal: "27440$",
    title: "Номер квартиры №6",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 6,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "42 м.кв",
    price: "700$",
    priceTotal: "29400$",
    title: "Номер квартиры №7",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 7,
    house: "2",
    floor: "1",
    rooms: "1",
    square: "39.2 м.кв",
    price: "700$",
    priceTotal: "27440$",
    title: "Номер квартиры №8",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
},
{
    id: 8,
    house: "2",
    floor: "1",
    rooms: "3",
    square: "79.3 м.кв",
    price: "700$",
    priceTotal: "55510$",
    title: "Номер квартиры №8",
    status: "action",

    description: [{
            text: "ул.Мира",
        },
        {
            text: "Lorem ipsum dolor sit amet."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum suscipit voluptatibus?"
        },
    ]
}
]

