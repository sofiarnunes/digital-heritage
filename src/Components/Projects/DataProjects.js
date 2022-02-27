import CasaGuerrero from '../../Assets/img/projects/casa-guerrero-1.png';
import CasaGuerrero2 from '../../Assets/img/projects/casa-guerrero-panel.jpg';
import CasaGuerrero3 from '../../Assets/img/projects/guerrero-1.jpg';
import CasaGuerrero4 from '../../Assets/img/projects/guerrero-2.jpg';
import CasaGuerrero5 from '../../Assets/img/projects/guerrero-3.jpg';
import CasaGuerrero6 from '../../Assets/img/projects/casa-guerrero-mob-1.jpg';
import CasaGuerrero7 from '../../Assets/img/projects/casa-guerrero-mob-2.jpg';
import CasaGuerrero8 from '../../Assets/img/projects/casa-guerrero-mob-3.jpg';
import CasaGuerrero9 from '../../Assets/img/projects/casa-guerrero-mob-4.jpg';
import CasaGuerrero10 from '../../Assets/img/projects/casa-guerrero-mob-5.jpg';
import CasaGuerrero11 from '../../Assets/img/projects/casa-guerrero-mob-6.jpg';
import RomanMural from '../../Assets/img/projects/roman-mural-1.png';
import RomanMural2 from '../../Assets/img/projects/roman-mural-2.png';
import RomanMural3 from '../../Assets/img/projects/mural-panel.jpg';
import RomanMural4 from '../../Assets/img/projects/mural-1.gif';
import RomanMural6 from '../../Assets/img/projects/mural-mob-1.jpg';
import RomanMural7 from '../../Assets/img/projects/mural-mob-2.jpg';
import RomanMural8 from '../../Assets/img/projects/mural-mob-3.jpg';
import RomanMural9 from '../../Assets/img/projects/mural-mob-4.jpg';
import RomanMural10 from '../../Assets/img/projects/mural-mob-5.jpg';
import RomanMural11 from '../../Assets/img/projects/mural-mob-6.jpg';
import LowRelief from '../../Assets/img/projects/low-relief-1.png';
import LowRelief2 from '../../Assets/img/projects/low-relief-2.png';
import LowRelief3 from '../../Assets/img/projects/relief-panel.jpg';
import LowRelief4 from '../../Assets/img/projects/relief-mob-1.jpg';
import LowRelief5 from '../../Assets/img/projects/relief-mob-2.jpg';
import LowRelief6 from '../../Assets/img/projects/relief-mob-3.jpg';
import LowReliefv1 from '../../Assets/img/projects/Complex/Relief/relief-v1.jpg';
import LowReliefh1 from '../../Assets/img/projects/Complex/Relief/relief-h1.jpg';
import LowReliefv2 from '../../Assets/img/projects/Complex/Relief/relief-v2.mp4';
import LowReliefh2 from '../../Assets/img/projects/Complex/Relief/relief-h2.mp4';
import LowReliefv3 from '../../Assets/img/projects/Complex/Relief/relief-v3.jpg';
import LowReliefh3 from '../../Assets/img/projects/Complex/Relief/relief-h3.jpg';
import TouchCollection1 from '../../Assets/img/projects/collection-1.jpg';
import TouchCollection2 from '../../Assets/img/projects/collection-panel.jpg';
import TouchCollection3 from '../../Assets/img/projects/collection-mob-1.jpg';
import TouchCollection4 from '../../Assets/img/projects/collection-mob-2.jpg';
import TouchCollection5 from '../../Assets/img/projects/collection-mob-3.jpg';
import Touchv1 from '../../Assets/img/projects/Complex/Collection/collection-v1.JPG';
import Touchh1 from '../../Assets/img/projects/Complex/Collection/collection-h1.jpeg';
import Touchv2 from '../../Assets/img/projects/Complex/Collection/collection-v2.mp4';
import Touchh2 from '../../Assets/img/projects/Complex/Collection/collection-h2.png';
import Touchv3 from '../../Assets/img/projects/Complex/Collection/collection-v3.JPG';
import Touchh3 from '../../Assets/img/projects/Complex/Collection/collection-h3.mp4';



const DataProjects = [
    {
        name: 'Digitization and 3D printing for touch collection',
        name_1: 'touch collection',
        type: '3',
        format: 'extended',
        link: '/projects/digitization-3Dprinting-for-touch-collection',
        date_begin: 'December 2021',
        date_end: 'present',
        img_2: TouchCollection1,
        img_3: TouchCollection2,
        img_4: TouchCollection3,
        img_5: TouchCollection4,
        img_6: TouchCollection5,
        v1: Touchv1,
        h1: Touchh1,
        v2: Touchv2,
        h2: Touchh2,
        v3: Touchv3,
        h3: Touchh3,
        title_1: '3D digitization and modelling',
        description_1: 'A group of representative artworks from different collections from the Calouste Gulbenkian Museum were selected to create a 3D printed Touch Collection for visually impaired audiences. The 3D models of the artworks were first created through digital photogrammetry and 3D modelling.',
        title_2: 'Interactive models',
        description_2: 'The 3D models were further developed to open and close their doors and drawers, like the original objects, to ensure a fuller comprehension of these artworks and an interactivity similar to the original.',
        title_3: '3D Printing',
        description_3: 'The models will be 3D printed to be touched by visually impaired audiences, during the museum exhibition.',
    },
    {
        name: 'Virtual restoration of an Egyptian low relief (300-250 BC)',
        name_1: 'Egyptian low relief (300-250 BC)',
        link: '/projects/virtual-restoration-egyptian-low-relief',
        type: '1',
        format: 'extended',
        date_begin: 'September 2021',
        date_end: 'November 2021',
        img_1: LowRelief,
        img_2: LowRelief2,
        img_3: LowRelief3,
        img_4: LowRelief4,
        img_5: LowRelief5,
        img_6: LowRelief6,
        v1: LowReliefv1,
        h1: LowReliefh1,
        v2: LowReliefv2,
        h2: LowReliefh2,
        v3: LowReliefv3,
        h3: LowReliefh3,
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
        date_begin: 'July 2021',
        date_end: 'August 2021',
        img_1: RomanMural,
        img_2: RomanMural2,
        img_3: RomanMural3,
        img_4: RomanMural4,
        img_5: RomanMural6,
        img_6: RomanMural7,
        img_7: RomanMural11,
        img_8: RomanMural8,
        img_9: RomanMural9,
        img_10: RomanMural10,
        img_11: RomanMural10,
        img_12: RomanMural10,
        description: 'A thermopolium (hot-food outlet), covered in beautiful frescos, was recently found (2020) in the Alley of the Balconies, in Pompeii. The extensive distortions in the fresco, caused by the volcanic eruption, were digitally recovered, allowing a full perception of the image from thousands of years ago.',
    },
    {
        name: '3d modelling of Casa Guerrero',
        name_1: 'Casa Guerrero',
        type: '3',
        format: 'simple',
        link: '/projects/3D-modelling-casa-guerrero',
        date_begin: 'May 2021',
        date_end: 'June 2022',
        img_1: CasaGuerrero,
        img_2: CasaGuerrero,
        img_3: CasaGuerrero2,
        img_4: CasaGuerrero3,
        img_5: CasaGuerrero4,
        img_6: CasaGuerrero5,
        img_7: CasaGuerrero6,
        img_8: CasaGuerrero7,
        img_9: CasaGuerrero8,
        img_10: CasaGuerrero9,
        img_11: CasaGuerrero10,
        img_12: CasaGuerrero11,
        description: 'Using CAD plans from the Casa Guerrero, by architect Alberto Campo Baeza, in Cádiz, Spain, a 3D model of this architectural space was created. The surroundings were also considered in the creation of a photorealistic environment, with the modelling of water, trees and other plant elements.',
    },
]


export default DataProjects