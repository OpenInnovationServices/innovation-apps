import { Challenge } from './challenges';
import { ItemGroup } from './challenges';

// export const CHALLENGES: Challenge[] = [
//   {
//     _id: 1,
//     name: 'CrazyCombination',
//     about: 'Some quick text goes here,Some quick text goes here',
//     instructions: 'Some quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes here',
//     mix_group: 1,
//     match_group: 2
//   },
//   { _id: 2, 
//     name: 'Innovation Challenge', 
//     about: 'Some quick text goes here,Some quick text goes here', 
//     instructions: 'Some quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes here',
//     mix_group: 1,
//     match_group: 2
//   },
//   { _id: 3, 
//     name: 'ReImagine', 
//     about: 'Some quick text goes here,Some quick text goes here', 
//     instructions: 'Some quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes here', 
//     mix: 1,
//     match: 2
//   },
//   { _id: 4, 
//   name: 'Sustainable Solution', 
//   about: 'Some quick text goes here,Some quick text goes here', 
//   instructions: 'Some quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes hereSome quick text goes here,Some quick text goes here', 
//   mix_group: 1,
//   match_group: 2
//   },
// ];

export const CHALLENGE_DATA: ItemGroup[] = [{
  id: 1,
  name: 'BUSINESS_ACTIVITIES',
  itemSrc: [
    { id: 1, name: 'Products', src: 'assets/images/businessActicities/products.png' },
    { id: 2, name: 'Services', src: 'assets/images/businessActicities/services.png' },
    { id: 3, name: 'Brand', src: 'assets/images/businessActicities/brand.png' },
    { id: 4, name: 'Operations', src: 'assets/images/businessActicities/operations.png' },
    { id: 5, name: 'Sales Processes', src: 'assets/images/businessActicities/salesProcesses.png' },
    { id: 6, name: 'Revenue Model', src: 'assets/images/businessActicities/revenueModel.png' },
    { id: 7, name: 'Channel', src: 'assets/images/businessActicities/channel.png' },
    { id: 8, name: 'Customer Comms', src: 'assets/images/businessActicities/customerComms.png' },
    { id: 9, name: 'Partnerships', src: 'assets/images/businessActicities/partnerships.png' },
    { id: 10, name: 'Procurement', src: 'assets/images/businessActicities/procurement.png' },
    { id: 11, name: 'HR Processes', src: 'assets/images/businessActicities/hrProcesses.png' },
    { id: 12, name: 'Finance Processes', src: 'assets/images/businessActicities/financeProcesses.png' }
  ]
},
{
  id: 6,
  name: 'EMERGING_TECHNOLOGY',
  itemSrc: [
    { id: 1, name: 'Artificial Intelligence', src: 'assets/images/emergingTechnology/artificialIntelligence.png' },
    { id: 2, name: 'Robotics', src: 'assets/images/emergingTechnology/robotics.png' },
    { id: 3, name: 'Internet Of Things', src: 'assets/images/emergingTechnology/iot.png' },
    { id: 4, name: '3D-Printing', src: 'assets/images/emergingTechnology/3D-Printing.png' },
    { id: 5, name: 'VR/AR', src: 'assets/images/emergingTechnology/vrAr.png' },
    { id: 6, name: 'Blockchain', src: 'assets/images/emergingTechnology/blockchain.png' },
    { id: 7, name: 'BigData', src: 'assets/images/emergingTechnology/bigData.png' },
    { id: 8, name: 'Drones', src: 'assets/images/emergingTechnology/drones.png' },
    { id: 9, name: 'Voice', src: 'assets/images/emergingTechnology/voice.png' },
    { id: 10, name: 'Collaborative Tech', src: 'assets/images/emergingTechnology/collaborativeTech.png' },
    { id: 11, name: 'Biometrics', src: 'assets/images/emergingTechnology/biometrics.png' },
    { id: 12, name: 'Gene Editing', src: 'assets/images/emergingTechnology/geneEditing.png' }
  ]
}, {
  id: 3,
  name: 'GREENHOUSE_GASES',
  itemSrc: [
    { id: 1, name: 'Cars', src: 'assets/images/greenHouseGases/cars.png' },
    { id: 2, name: 'Energy', src: 'assets/images/greenHouseGases/energy.png' },
    { id: 3, name: 'Meat & Dairy', src: 'assets/images/greenHouseGases/meatDairy.png' },
    { id: 4, name: 'Water & Waste', src: 'assets/images/greenHouseGases/waterWaste.png' },
    { id: 5, name: 'Plastic', src: 'assets/images/greenHouseGases/plastic.png' },
    { id: 6, name: 'Clothes', src: 'assets/images/greenHouseGases/clothes.png' },
    { id: 7, name: 'Buildings', src: 'assets/images/greenHouseGases/buildings.png' }
  ]
},
{
  id: 4,
  name: 'EMERGING_TECHNOLOGIES',
  itemSrc: [
    { id: 1, name: 'Virtual Reality', src: 'assets/images/crazyCombinationApp/vr-glasses.png' },
    { id: 2, name: '3D-Printing', src: 'assets/images/crazyCombinationApp/3d-print.png' },
    { id: 3, name: 'Drones', src: 'assets/images/crazyCombinationApp/drone.png' },
    { id: 4, name: 'Artificial Intelligence', src: 'assets/images/crazyCombinationApp/ai.png' },
    { id: 5, name: 'Mixed Reality', src: 'assets/images/crazyCombinationApp/big-data.png' },
    { id: 6, name: 'Biometrics', src: 'assets/images/crazyCombinationApp/biometrics.png' },
    { id: 7, name: 'Internet Of Things', src: 'assets/images/crazyCombinationApp/iot.png' }
  ]
},
{
  id: 5,
  name: 'HOME_WORKING_FRUSTATIONS',
  itemSrc: [
    { id: 1, name: 'Disengagement', src: 'assets/images/homeWorkingFrustations/disengagement.png' },
    { id: 2, name: 'Unsuitable Logistics', src: 'assets/images/homeWorkingFrustations/unsuitableLogistics.png' },
    { id: 3, name: 'Slow Decision Making', src: 'assets/images/homeWorkingFrustations/slowDecisionMaking.png' },
    { id: 4, name: 'Poor Communications', src: 'assets/images/homeWorkingFrustations/poorCommunications.png' },
    { id: 5, name: 'Lack Of Collaboration', src: 'assets/images/homeWorkingFrustations/lackOfCollaboration.png' },
    { id: 6, name: 'Inefficient Processes', src: 'assets/images/homeWorkingFrustations/inefficientProcesses.png' },
    { id: 7, name: 'Ineffective Systems', src: 'assets/images/homeWorkingFrustations/ineffectiveSystems.png' },
    { id: 8, name: 'Unclear Roles', src: 'assets/images/homeWorkingFrustations/unclearRoles.png' },
    { id: 9, name: 'Unfair Expectations', src: 'assets/images/homeWorkingFrustations/unfairExpectations.png' }
  ]
},
{
  id: 101,
  name: 'EVERYDAY_OBJECTS',
  itemSrc: [
    { id: 1, name: '🚗', src: 'assets/images/homeWorkingFrustations/disengagement.png' },
    { id: 2, name: '🏠', src: 'assets/images/homeWorkingFrustations/unsuitableLogistics.png' },
    { id: 3, name: '❤️', src: 'assets/images/homeWorkingFrustations/slowDecisionMaking.png' },
    { id: 4, name: '🛒', src: 'assets/images/homeWorkingFrustations/poorCommunications.png' },
    { id: 5, name: '🐕', src: 'assets/images/homeWorkingFrustations/lackOfCollaboration.png' },
    { id: 6, name: '🎉', src: 'assets/images/homeWorkingFrustations/inefficientProcesses.png' },
    { id: 7, name: '💊', src: 'assets/images/homeWorkingFrustations/ineffectiveSystems.png' },
    { id: 8, name: '☀️', src: 'assets/images/homeWorkingFrustations/ineffectiveSystems.png' },
    { id: 9, name: '🍲', src: 'assets/images/homeWorkingFrustations/ineffectiveSystems.png' },
  ]
},
{
  id: 102,
  name: 'EMERGING_TECHNOLOGIES',
  itemSrc: [
    { id: 1, name: 'Virtual Reality', src: 'assets/images/crazyCombinationApp/vr-glasses.png' },
    { id: 2, name: '3D-Printing', src: 'assets/images/crazyCombinationApp/3d-print.png' },
    { id: 3, name: 'Drones', src: 'assets/images/crazyCombinationApp/drone.png' },
    { id: 4, name: 'Artificial Intelligence', src: 'assets/images/crazyCombinationApp/ai.png' },
    { id: 5, name: 'Biometrics', src: 'assets/images/crazyCombinationApp/biometrics.png' },
    { id: 6, name: 'Internet Of Things', src: 'assets/images/crazyCombinationApp/iot.png' },
    { id: 7, name: 'Big Data', src: 'assets/images/crazyCombinationApp/bigData.png' },
    { id: 8, name: 'Block Chain', src: 'assets/images/crazyCombinationApp/blockChain.png' }
  ]
},
{
  id: 103,
  name: 'PRODUCT_SERVICES',
  itemSrc: [
    { id: 1, name: 'Products', src: 'assets/images/connectTheDots/products.png' },
    { id: 2, name: 'Brand', src: 'assets/images/connectTheDots/brands.png' },
    { id: 3, name: 'Operations', src: 'assets/images/connectTheDots/operations.png' },
    { id: 4, name: 'Sales Processes', src: 'assets/images/connectTheDots/sales.png' },
    { id: 5, name: 'Finance Processes', src: 'assets/images/connectTheDots/finance.png' },
    { id: 6, name: 'HR Processes', src: 'assets/images/connectTheDots/hr.png' },
    { id: 7, name: 'Procurement', src: 'assets/images/connectTheDots/procurement.png' },
    { id: 8, name: 'Partnerships', src: 'assets/images/connectTheDots/partnership.png' }
  ]
}
]