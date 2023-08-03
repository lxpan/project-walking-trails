const reviewStrings = [
    [
        'Exploring the Lake Wendouree trail was an absolute delight! The scenery was breathtaking, with stunning views of the lake and surrounding nature. The trail itself was well-maintained and easy to follow. I highly recommend this trail to anyone looking for a peaceful and enjoyable hiking experience.',
    ],

    [
        'The Lake Wendouree trail is a hidden gem for hikers. It offers a perfect blend of tranquility and natural beauty. Walking along the lake, I felt completely immersed in nature. The trail is well-marked, and there are plenty of benches and resting spots along the way. It\'s a must-visit for outdoor enthusiasts!',
    ],

    [
        'I had a fantastic time hiking the Lake Wendouree trail. The path meanders through lush greenery and offers picturesque views of the lake. It\'s a great trail for all skill levels, as it\'s not too strenuous. Make sure to bring your camera along to capture the incredible sunsets over the water!',
    ],

    [
        'The Lake Wendouree trail exceeded my expectations. The trail system is well-designed and maintained, making it easy to navigate. The abundance of wildlife, including birds and ducks, added an extra touch to the overall experience. It\'s a peaceful and rejuvenating hike that I would definitely do again.',
    ],

    [
        'I thoroughly enjoyed my hike on the Lake Wendouree trail. The trail offers a diverse range of landscapes, from open meadows to shady forests. It\'s a great place to disconnect from the hustle and bustle of daily life and immerse yourself in nature. The trail is also dog-friendly, which was a big plus for me and my furry friend.',
    ],

    [
        'The Lake Wendouree trail is a wonderful escape for nature lovers. The trail is well-maintained, and the signage is clear and informative. I particularly enjoyed the boardwalk sections that take you right over the water, offering stunning views of the lake and its inhabitants. It\'s a true gem in the heart of nature.',
    ],

    [
        'Hiking the Lake Wendouree trail was a delightful experience. The trail is surrounded by beautiful flora, including vibrant wildflowers and towering trees. The views of the lake are breathtaking, and there are several lookout points where you can take in the scenery. I highly recommend this trail to anyone visiting the area.',
    ],

    [
        'I was blown away by the natural beauty of the Lake Wendouree trail. The trail winds through a peaceful and serene environment, providing a much-needed break from the city. The peacefulness of the lake, combined with the sound of birds chirping, created a truly tranquil atmosphere. It\'s a perfect getaway for hikers seeking relaxation.',
    ],

    [
        'The Lake Wendouree trail is a hiker\'s paradise. The well-maintained path offers a good mix of flat sections and gentle slopes, suitable for all fitness levels. I was impressed by the accessibility features, such as the wheelchair-friendly sections. The trail provides a fantastic opportunity to connect with nature while enjoying a scenic workout.',
    ],

    [
        'The Lake Wendouree trail is a true gem for hiking enthusiasts. The well-preserved natural surroundings and the serene atmosphere make it a joy to explore. The trail is perfect for families, with picnic areas and playgrounds along the way. Whether you\'re a nature lover or simply looking for a peaceful walk, this trail won\'t disappoint.',
    ],
];

const randomFirstNames = [
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'Elijah',
    'Sophia',
    'William',
    'Isabella',
    'James',
];

const reviews = {};

const objectBuilder = (array) => {
    let i = 0;

    array.forEach((rev) => {
        const temp = {
            [i]: {
                user_id: i,
                user_name: randomFirstNames[i],
                rating: 5,
                comment: rev,
            },
        };
        Object.assign(reviews, temp);
        i += 1;
    });
};

objectBuilder(reviewStrings);
console.log(reviews);
