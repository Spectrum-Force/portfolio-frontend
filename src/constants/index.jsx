import { Award, AwardIcon, BookText, BookTextIcon, BriefcaseBusiness, BriefcaseBusinessIcon, CircleUserIcon, EarthLock, EarthLockIcon,  GraduationCap,  GraduationCapIcon,  LayoutDashboard, MessageCircleCode } from "lucide-react";


  const K = {
    NAVLINKS: [
        {
            icon:< LayoutDashboard/>,
            text: "Overview",
            link:"/dashboard"
        },
        {
            icon:<CircleUserIcon/>,
            text: "Profile",
            link:"/dashboard/profile"
        },
        {
            icon:<GraduationCap/>,
            text: "Education",
            link:"/dashboard/education"
        },
        {
            icon:<EarthLock/>,
            text: "Projects",
            link:"/dashboard/projects"
        },
        {
            icon:<BriefcaseBusiness/>,
            text: "Experience",
            link:"/dashboard/experience"
        },
        {
            icon:<BookText/>,
            text: "Skills",
            link:"/dashboard/skills"
        },
        {
            icon:<Award/>,
            text: "Achievements",
            link:"/dashboard/achievements"
        },
       
        {
            icon:<MessageCircleCode/>,
            text: "Socials",
            link:"/dashboard/socials"
        },
        
    ],

        OVERVIEW: [
            {
                icon: <GraduationCapIcon/>,
                text: "Education",
                total: 5,
            },
            {
                icon: <EarthLockIcon/>,
                text: "Projects",
                total: 10,
            },
            {
                icon: <BriefcaseBusinessIcon/>,
                text: "Experience",
                total: 30,
            },
            {
                icon: <BookTextIcon/>,
                text: "Skills",
                total: 30,
            },
            {
                icon: <AwardIcon/>,
                text: "Achievements",
                total: 30,
            },
           
        ],

    SKILLS: [
        {
            name:"HTML",
            levelOfProciency: "Advanced",
        },
        {
            name:"CSS",
            levelOfProciency: "Advanced",
        },
        {
            name:"JavaScript",
            levelOfProciency: "Intermediate",
        },
        {
            name:"TypeScript",
            levelOfProciency: "Beginner",
        },
        {
            name:"React",
            levelOfProciency: "Beginner",
        },
    ]


};

export default K;
