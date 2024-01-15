import { stackoverflow, games } from "../assets/icons";
import  { c } from "../assets/icons";
export const projects = [
    {
        iconUrl: games,
        theme: 'btn-back-white',
        name: 'Game Hub',
        description: 'A video game discovery web app that helps you find new and interesting games to play. With Hub, you can search for games by platform, genre, and more.',
        link: 'https://github.com/antenmanuuel/game-hub',
    },
    {
        iconUrl: stackoverflow,
        theme: 'btn-back-yellow',
        name: 'Fake Stack Overflow Clone',
        description: 'Built with React, Express.js, Material-UI, and MongoDB, mirrors 15 key features of Stack Overflow, focusing on enhanced security and improved user experience. It features robust user authentication using bcrypt and a 50% faster page load through efficient pagination, blending a secure, responsive backend with a sleek, intuitive frontend.',
        link: 'https://github.com/antenmanuuel/FakeStackOverFlowClone',
    },

    {
        iconUrl: c,
        theme: 'btn-back-white',
        name: 'WolfPack Packet Handler',
        description: 'Handle and manage data using the WolfPack Protocol. This project offers simple tools to break down, check, and rebuild data packets just like IPv4. Perfect for understanding basic network tasks. Dive in and start managing packets with ease!',
        link: 'https://github.com/antenmanuuel/WolfPackPacketHandler',
    }
];