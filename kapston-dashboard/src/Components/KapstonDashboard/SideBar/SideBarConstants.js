import AdminIcon from "../../Common/ImagesAndIcons/AdminIcon";
import ApplicationIcon from "../../Common/ImagesAndIcons/ApplicationIcon";
import ConnectionIcon from "../../Common/ImagesAndIcons/ConnectionIcon";
import CostIcon from "../../Common/ImagesAndIcons/CostIcon";
import DocsIcon from "../../Common/ImagesAndIcons/DocsIcon";
import KapstanLogo from "../../Common/ImagesAndIcons/KapstanLogo";
import SecurityIcon from "../../Common/ImagesAndIcons/SecurityIcon";
import ShrinkWindowIcon from "../../Common/ImagesAndIcons/ShrinkWindowIcon";

export const sideBarContants = [ 
    
     {  heading:'Kapstan',
        icon: <KapstanLogo/> ,
        Extentions: '',
        positionStarts:'top',
        seperatorPresent: true,

    },
    {
        heading:'Applications',
        icon: <ApplicationIcon/>,
        Extentions: '',
        positionStarts:'top',
        seperatorPresent:true,

    },
    {
        heading:'Conections',
        icon: <ConnectionIcon/>,
        Extentions: '',
        positionStarts:'top',
        seperatorPresent:false,


    },
    {
        heading:'Cost',
        icon: <CostIcon/>,
        Extentions: '',
        positionStarts:'top',
        seperatorPresent:false,


    },
    {
        heading:'Security',
        icon:<SecurityIcon/>,
        Extentions: 'Beta',
        positionStarts:'top',
        seperatorPresent:true,

    },

    {
        heading:'Admin',
        icon:<AdminIcon/>,
        Extentions:'',
        positionStarts:'bottom',

    },
    {
        heading:'Docs',
        icon:<DocsIcon/>,
        Extentions:'',
        positionStarts:'bottom',
        seperatorPresent:true,

        
    },
    {
        heading:'',
        icon:<ShrinkWindowIcon/>,
        Extentions:'',
        positionStarts:'bottom',
        seperatorPresent:false,

        
    },
    


]

