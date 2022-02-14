import React from 'react';
import CasaGuerrero from '../../Assets/img/projects/casa-guerrero-1.png';
import RomanMural from '../../Assets/img/projects/roman-mural-1.png';
import RomanMural2 from '../../Assets/img/projects/roman-mural-2.png';
import LowRelief from '../../Assets/img/projects/low-relief-1.png';
import LowRelief2 from '../../Assets/img/projects/low-relief-2.png';


const DataProjects = [
    {
        name: 'Digitization and 3D printing for touch collection',
        name_1: 'touch collection',
        type: '3',
        format: 'extended',
        link: '/projects/digitization-3Dprinting-for-touch-collection',
        date_begin: '2021',
        date_end: 'present',
        img_1: LowRelief,
        img_2: LowRelief2,
        img_3: 'xpto',
        img_4: 'xpto',
        title_1: '3D digitization and modelling',
        description_1: 'A group of representative artworks from different collections from the Calouste Gulbenkian Museum were selected to create a 3D printed Touch Collection for visually impaired audiences. The 3D models of the artworks were first created through digital photogrammetry and 3D modelling.',
        title_2: 'Interactive models',
        description_2: 'The 3D models were further developed to open and close their doors and drawers, like the original objects, to ensure a fuller comprehension of these artworks and an interactivity similar to the original.',
        title_3: '3D Printing',
        description_3: 'The models will be 3D printed to be felt by visually impaired audiences, during the museum exhibition.',
    },
    {
        name: 'Virtual restoration of an Egyptian low relief (300-250 BC)',
        name_1: 'Egyptian low relief (300-250 BC)',
        link: '/projects/virtual-restoration-egyptian-low-relief',
        type: '1',
        format: 'extended',
        date_begin: '2021',
        date_end: '2021',
        img_1: LowRelief,
        img_2: LowRelief2,
        img_3: 'xpto',
        img_4: 'xpto',
        title_1: '3D model',
        description_1: 'This Egyptian low relief (300-250 B.C.), from the Calouste Gulbenkian Museum, is thought to be a once painted artist\'s study. A 3D model of the artwork was first created, using digital photogrammetry.',
        title_2: 'Virtual Restoration',
        description_2: 'Damages like lacunae, previous conservation interventions, abrasion marks, fungi, and other stains were identified in the artwork. This conservation assessment informed on the virtual restoration of the digital twin.',
        title_3: 'Color Reconstruction',
        description_3: 'An exhaustive study of the colors that were mostly used at the time in wall paintings was carried out. A study of parallels was also made to support the color choices and their different arrangements.',
    },
    {
        name: 'Virtual restoration of a roman mural painting',
        name_1: 'roman mural painting',
        type: '1',
        format: 'simple',
        link: '/projects/virtual-restoration-roman-mural-painting',
        date_begin: '2021',
        date_end: '2021',
        img_1: RomanMural,
        img_2: RomanMural2,
        img_3: 'xpto',
        img_4: 'xpto',
        description: 'A thermopolium (hot-food outlet), covered in beautiful frescos, was recently found (2020) in the Alley of the Balconies, in Pompeii. The extensive distortions in the fresco, caused by the volcanic eruption, were digitally recovered, allowing a full perception of the image from thousands of years ago.',
    },
    {
        name: '3d modelling of Casa Guerrero',
        name_1: 'Casa Guerrero',
        type: '3',
        format: 'simple',
        link: '/projects/3D-modelling-casa-guerrero',
        date_begin: '2021',
        date_end: '2021',
        img_1: CasaGuerrero,
        img_2: CasaGuerrero,
        img_3: 'xpto',
        img_4: 'xpto',
        description_1: 'Using CAD plans from the Casa Guerrero, by architect Alberto Campo Baeza, in Cádiz, Spain, a 3D model of this architectural space was created. The surroundings were also considered in the creation of a photorealistic environment, with the modelling of water, trees and other plant elements.',
    },
]


export default DataProjects